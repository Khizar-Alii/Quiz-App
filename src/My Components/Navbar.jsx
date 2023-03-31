import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <header>
        <h1>Quiz App</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
