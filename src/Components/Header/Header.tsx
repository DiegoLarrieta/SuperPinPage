import { LogoBlanco, ShopIcon, HamburgerIcon, CloseMenuIcon } from "../../assets/images";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom"; // Import Link for routing


const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMenuClick = () => {
    setIsNavOpen(!isNavOpen);  // Toggle the menu state
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Iceland&display=swap');

          body {
            margin: 0;
          }

          .header {
            font-family: 'Iceland', serif;
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 30px;
            background-color: black;
            box-sizing: border-box;
            transition: top 0.3s;
          }

          .header__logo img {
            max-width: 8vw;
          }

          .header__title-container {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 3;
          }

          .header__title {
            font-size: 5vw;
            font-weight: 400;
            color: white;
            margin: 0;
            line-height: 1;
          }

          .header__icons {
            display: flex;
            justify-content: flex-end;
            gap: 20px;
            position: relative;
          }

          .icon-button {
            background: none;
            border: none;
            padding: 5px;
            cursor: pointer;
            position: relative;
          }

          .icon-button img {
            max-width: 3vw;
            transition: opacity 0.3s ease;
          }

          .menu-icon, .close-icon {
            display: none; /* Hide menu and close icons by default */
          }

          .icon-button.active .menu-icon {
            display: none; /* Hide menu icon when active */
          }

          .icon-button.active .close-icon {
            display: block; /* Show close icon when active */
          }

          @media (max-width: 768px) {
            .header__title {
              font-size: 10vw;
            }

            .header__logo img {
              max-width: 10vw;
            }

            .icon-button img {
              max-width: 5vw;
            }

            .cart-icon {
              display: none; /* Hide cart icon on small screens */
            }

            .menu-icon {
              display: block; /* Show menu icon on small screens */
            }

            .icon-button.active .menu-icon {
              display: none; /* Hide menu icon when active */
            }

            .icon-button.active .close-icon {
              display: block; /* Show close icon when active */
            }
          }

          @media (min-width: 769px) {
            .menu-button {
              display: none; /* Hide menu button on large screens */
            }
          }
        `}
      </style>
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <img src={LogoBlanco} alt="Logo" />
          </Link>
        </div>
        <div className="header__title-container">
          <div className="header__title">SUPER</div>
          <div className="header__title">PIN</div>
        </div>
        <div className="header__icons">
          <button
            className={`icon-button menu-button ${isNavOpen ? "active" : ""}`}
            onClick={handleMenuClick}
          >
            <img src={HamburgerIcon} alt="Menú" className="menu-icon" />
            <img src={CloseMenuIcon} alt="Cerrar" className="close-icon" />
          </button>
          <button className="icon-button cart-icon">
            <img src={ShopIcon} alt="Carrito de Compras" />
          </button>
        </div>
      </header>

      {/* Pass isNavOpen as isVisible to Navbar */}
      <Navbar isVisible={isNavOpen} />  {/* Navbar now receives the isVisible prop */}
    </>
  );
};

export default Header;