import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

// Array of menu items with name and route
const menuItems = [
  { name: "¿Cómo funciona?", route: "/como-funciona" },
  { name: "Reviews", route: "/reviews" },
  { name: "Mayoreo", route: "/mayoreo" },
  { name: "Blog", route: "/blog" },
  { name: "Envíos", route: "/envios" },
];

const Navbar: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <>
      <style>
        {`
          .navbar {
            display: none;
            position: absolute;
            top: 60px; /* Adjust based on your header height */
            left: 0;
            width: 100%;
            background-color: black;
            color: white;
            text-align: center;
            padding: 10px 0;
            z-index: 999;
          }

          .navbar.visible {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          }

          .navbar ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-evenly;
            width: 100%;
          }

          .navbar ul li {
            margin: 0 15px;
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .navbar ul li:hover {
            transform: scale(1.1);
            color: #ffcc00; /* Change color on hover */
          }

          .navbar ul li a {
            color: white;
            text-decoration: none;
            font-size: 18px;
            transition: color 0.3s ease;
          }

          .navbar ul li a:hover {
            color: #ffcc00; /* Change color on hover */
          }

          .navbar ul li:active {
            transform: scale(0.9);
            color: #ff6600; /* Change color on click */
          }

          @media (min-width: 769px) {
            .navbar {
              display: flex; /* Show navbar on large screens */
              position: relative;
              top: 0;
            }
          }

          @media (max-width: 768px) {
            .navbar {
              display: none; /* Hide navbar on small screens */
              flex-direction: column; /* Stack items vertically */
              position: fixed;
              top: 0;
              left: 0;
              height: 100vh;
              justify-content: center;
              align-items: center;
            }

            .navbar.visible {
              display: flex; /* Show navbar when visible on small screens */
            }

            .navbar ul {
              flex-direction: column; /* Stack items vertically */
              align-items: center;
            }

            .navbar ul li {
              margin: 15px 0; /* Add vertical spacing */
            }
          }
        `}
      </style>
      <div className={`navbar ${isVisible ? "visible" : ""}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              {/* Use Link instead of a tag for internal routing */}
              <Link to={item.route}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
