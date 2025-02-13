import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import XLSX from "xlsx";
import fs from "fs";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const EXCEL_FILE_PATH = "./contact_submissions.xlsx";

// ✅ Function to Write Data to Excel
const writeToExcel = (email, subject, message) => {
    let workbook;
    let worksheet;
    
    // Check if the file exists
    if (fs.existsSync(EXCEL_FILE_PATH)) {
        workbook = XLSX.readFile(EXCEL_FILE_PATH);
        worksheet = workbook.Sheets["Submissions"];
    } else {
        workbook = XLSX.utils.book_new();
        worksheet = XLSX.utils.aoa_to_sheet([["Email", "Subject", "Message"]]); // Header row
        XLSX.utils.book_append_sheet(workbook, worksheet, "Submissions");
    }

    // Append new row
    const newRow = [[email, subject, message]];
    const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    sheetData.push(...newRow);

    // Convert back to worksheet and write file
    worksheet = XLSX.utils.aoa_to_sheet(sheetData);
    workbook.Sheets["Submissions"] = worksheet;
    XLSX.writeFile(workbook, EXCEL_FILE_PATH);
};

// ✅ API Endpoint for Contact Form Submission
app.post("/send-email", async (req, res) => {
    const { email, subject, message } = req.body;

    try {
        // Save to Excel
        writeToExcel(email, subject, message);

        // Send Email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // Your app password (not Gmail password)
            },
        });

        const mailOptions = {
            from: email, // Set sender email dynamically
            to: process.env.EMAIL_USER, // Your email (where you receive it)
            subject: `New Contact Form Submission: ${subject}`, // Subject
            text: `📩 New Contact Form Submission\n\n📧 Email: ${email}\n📜 Subject: ${subject}\n✉️ Message: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: "Email sent successfully!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing request" });
    }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
