import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
  return (
    <header>
      <h1>Mental Health Resource Hub</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/exercises">Exercises</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contactus">ContactUs</Link>

      </nav>
   
    </header>
  );
}

export default Header;
