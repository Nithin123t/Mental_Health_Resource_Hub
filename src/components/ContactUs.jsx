import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");

        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setResponseMessage(data.success || data.error);

            // ✅ Clear form on success
            if (data.success) {
                setFormData({
                    email: "",
                    subject: "",
                    message: "",
                });

                // ✅ Hide success message after 3 seconds
                setTimeout(() => {
                    setResponseMessage("");
                }, 3000);
            }
        } catch (error) {
            setResponseMessage("Something went wrong! Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                />
                <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Email"}
                </button>
            </form>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
    );
};

export default ContactUs;
