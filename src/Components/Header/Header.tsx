import { LogoBlanco, ShopIcon, HamburgerIcon} from "../../assets/images";
import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Iceland&display=swap');

          body {
            margin: 0; /* Remove default margin to avoid spacing issues */
          }

          .header {
            font-family: 'Iceland', serif;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:10px 30px;
            background-color: black;
            box-sizing: border-box;
            transition: top 0.3s;
          }

          .header__logo img {
            max-width: 8vw; /* Use viewport width for responsiveness */
          }

          .header__title-container {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 3; /* Increase flex value to make it bigger */
          }

          .header__title {
            font-size: 5vw;
            font-weight: 400;
            color: white;
            margin: 0;
            line-height: 1;
            margin: 0; /* Remove any default margin */
          }

          .header__icons {
            display: flex;
            justify-content: flex-end;
            gap: 20px; /* Adds consistent spacing between the buttons */
          }

          .icon-button {
            background: none;
            border: none;
            padding: 5px;
            cursor: pointer;
          }

          .icon-button img {
            max-width: 3vw;
          }

          @media (max-width: 768px) {
            .header__title {
              font-size: 7vw;
            }

          .header__logo img {
            max-width: 7vw; /* Use viewport width for responsiveness */
          }

          .icon-button img {
            max-width: 3vw;
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
          <button className="icon-button">
            <img src={HamburgerIcon} alt="Menú" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;