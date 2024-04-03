import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <div className="logo">My Website</div>
            <ul className="nav-links">
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/tutors")}>Tutors</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;