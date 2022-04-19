import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiBasketball } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Mairura
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portifolio">Portifolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com">
          <FaInstagram />
        </a>
        <a href="https://instagram.com">
          <FaTwitter />
        </a>
        <a href="https://dribble.com">
          <BiBasketball />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
