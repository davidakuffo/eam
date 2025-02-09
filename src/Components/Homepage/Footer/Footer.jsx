import React from "react";
import "./Footer.css"; // Import CSS
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Emmanuel Asare Ministries</h2>
        </div>

        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/gallery">Gallery</a>
          <a href="/sermons">Sermons</a>
          <a href="/events">Events</a>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Emmanuel Asare Ministries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
