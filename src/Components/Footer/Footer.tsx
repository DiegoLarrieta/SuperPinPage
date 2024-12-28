import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';  // Importamos los iconos
import { Link } from 'react-router-dom';  // Usamos Link para la navegación interna si las páginas existen en el sistema

const Footer: React.FC = () => {
  return (
    <>
      <style>
        {`
          .footer {
            background-color: #333;
            color: #fff;
            padding: 20px 0;
            text-align: center;
            font-family: Arial, sans-serif;
            width: 100%;
          }

          .footer__content {
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
            flex-wrap: wrap; /* Ensure responsiveness */
          }

          .footer__section {
            flex: 1;
            padding: 0 20px;
            min-width: 200px; /* Ensure sections don't get too small */
          }

          .footer__section h4 {
            margin-bottom: 10px;
            font-size: 18px;
          }

          .footer__section p {
            margin: 5px 0;
          }

          .footer__social-icons a {
            display: inline-block;
            margin: 0 10px;
            color: #fff;
            text-decoration: none;
            font-size: 1.5rem;
          }

          .footer__social-icons a:hover {
            color: #00bfff; /* Color when hovering over the social icons */
          }

          .footer__bottom {
            border-top: 1px solid #444;
            padding-top: 10px;
          }

          .footer__policies a {
            color: #fff;
            text-decoration: none;
            font-size: 1rem;
          }

          .footer__policies a:hover {
            color: #00bfff; /* Hover effect for policy links */
          }
        `}
      </style>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__section">
            <h4>Follow Us</h4>
            <div className="footer__social-icons">
              <a href="https://www.tiktok.com/@superpinstore" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
              <a href="https://www.instagram.com/superpinstore/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/Sup.PinStore" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2024 SuperPinStore. All rights reserved.</p>
          <div className="footer__policies">
            <Link to="/politicas-envio">Shipping Policy</Link> | 
            <Link to="/politicas-privacidad"> Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
