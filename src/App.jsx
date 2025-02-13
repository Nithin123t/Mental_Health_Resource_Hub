// src/App.jsx
import React from 'react'
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Articles from './components/Articles.jsx'
import Exercises from './components/Exercises.jsx'
import Resources from './components/Resources.jsx'
import ContactUs from './components/ContactUs.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './index.css';
function App() {
    return (
      <div>
        <Header />
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/resources" element={<Resources />} />
          <Route path='/contactus' element={<ContactUs/>}/>

        </Routes>
        
      </div>
    );
  }

export default App;
