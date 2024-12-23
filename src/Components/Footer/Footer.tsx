import React from "react";

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
          }

          .footer__bottom {
            border-top: 1px solid #444;
            padding-top: 10px;
          }
        `}
      </style>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__section">
            <h4>Company</h4>
            <p>About Us</p>
            <p>Contact</p>
            <p>Careers</p>
          </div>
          <div className="footer__section">
            <h4>Support</h4>
            <p>FAQ</p>
            <p>Help Center</p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer__section">
            <h4>Follow Us</h4>
            <div className="footer__social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;