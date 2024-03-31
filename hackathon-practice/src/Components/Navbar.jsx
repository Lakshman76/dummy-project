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
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;