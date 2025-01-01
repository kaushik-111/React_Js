import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link
import './Navbar.css'; // Import your CSS file for styling

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className='menubar'>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
