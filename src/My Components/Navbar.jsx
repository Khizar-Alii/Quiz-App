import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <header>
      <h1>Quiz App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
