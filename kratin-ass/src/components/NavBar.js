import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../components/NavBar.css";
export const NavBar = () => {
  return (
   <>
    <nav className='main-nav'>
    <div className='logo'>
        <h2>
            <span>K</span>ratin
            <span>W</span>ell
            <span>N</span>exus
        </h2>
    </div>
    <div className='menu-link'>
        <ul>
            <li>
                <a href='#'>Home</a>
            </li>
            <li>
                <a href='#'>About</a>
            </li>
            <li>
                <a href='#'>Services</a>
            </li>
            <li>
                <a href='#'>Contact</a>
            </li>
        </ul>
    </div>
    <div className='social-media'>
        <ul className='social-media-desktop'>
            <li>
                <a href='https://www.linkedin.com/in/harsh-tiwari-4859771ba/' target='linkdin'> <FaLinkedinIn className='linkdin' /></a>
            </li>
            <li>
                <a href='https://github.com/harsh7598' target='github'> <FaGithub className='github'/></a>
            </li>
            <li>
                <a href='https://www.instagram.com/heyitsharsh___/' target='insta'> <FaInstagram className='instagram' /></a>
            </li>
        </ul>
    </div>
    </nav>
   </>
  )
}

export default NavBar;