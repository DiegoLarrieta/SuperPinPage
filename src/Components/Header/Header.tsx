import { LogoBlanco, ShopIcon, HamburgerIcon, CloseMenuIcon } from "../../assets/images";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";  // Importando Navbar

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMenuClick = () => {
    setIsNavOpen(!isNavOpen);  // Alterna el estado del menú
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

          /* Hide close icon initially and show it when active */
          .close-icon {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            pointer-events: none;
          }

          .icon-button.active .menu-icon {
            opacity: 0; /* Hide menu icon when active */
          }

          .icon-button.active .close-icon {
            opacity: 1; /* Show close icon when active */
            pointer-events: auto;
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
          }
        `}
      </style>
      <header className="header">
        <div className="header__logo">
          <img src={LogoBlanco} alt="Logo" />
        </div>
        <div className="header__title-container">
          <div className="header__title">SUPER</div>
          <div className="header__title">PIN</div>
        </div>
        <div className="header__icons">
          <button className="icon-button">
            <img src={ShopIcon} alt="Carrito de Compras" />
          </button>
          <button
            className={`icon-button ${isNavOpen ? "active" : ""}`}
            onClick={handleMenuClick}
          >
            <img src={HamburgerIcon} alt="Menú" className="menu-icon" />
            <img src={CloseMenuIcon} alt="Cerrar" className="close-icon" />
          </button>
        </div>
      </header>

      {/* Pasa isNavOpen como isVisible a Navbar */}
      <Navbar isVisible={isNavOpen} />  {/* Ahora Navbar recibe la propiedad isVisible */}
    </>
  );
};

export default Header;
