

// Array de botones del menú con nombre y ruta.
const menuItems = [
  { name: "¿Cómo funciona?", route: "/como-funciona" },
  { name: "Reviews", route: "/reviews" },
  { name: "Mayoreo", route: "/mayoreo" },
  { name: "Blog", route: "/blog" },
  { name: "Envíos", route: "/envios" },
];

const Navbar: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {

  // Función para manejar la apertura y cierre del menú

  return (
    <>
      <style>
        {`
          /* Navbar styling */
          .navbar {
            width: 100%;
            background-color: #333;
            color: white;
            position: absolute;
            top: 60px;
            left: 0;
            height: 100%;
            display: none;
            transition: all 0.5s ease-in-out;
          }

          .navbar.open {
            display: block;
          }

          .navbar__menu {
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: center;
            align-items: center;
            height: 100%;
          }

          .navbar__menu-item {
            cursor: pointer;
            font-size: 18px;
            position: relative; /* To enable the underline effect */
            transition: all 0.3s ease-in-out;
            padding: 10px 20px;
            color: white;
            text-align: center;
          }

          /* Hover animation */
          .navbar__menu-item:hover {
            color: #00bfff; /* Change text color */
            transform: scale(1.1); /* Scale up effect */
            transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition for color and scale */
          }

          .navbar__menu-item::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #00bfff;
            transition: width 0.3s ease;
          }

          .navbar__menu-item:hover::after {
            width: 100%;
          }

          /* Active state when clicked */
          .navbar__menu-item.active {
            color: #ff6347; /* Highlight color for active item */
            transform: scale(1.1);
            transition: all 0.3s ease;
          }

          .navbar__menu-item.active::after {
            width: 100%;
            background-color: #ff6347; /* Active state underline color */
          }

          /* On mobile screens, animate the hamburger icon */
          .hamburger-icon {
            display: none;
            cursor: pointer;
            font-size: 30px;
          }

          @media (max-width: 768px) {
            .navbar__menu {
              display: none;
              flex-direction: column;
              width: 100%;
            }

            .hamburger-icon {
              display: block;
            }

            .navbar.open .navbar__menu {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }

        `}
      </style>

    <div className={`navbar ${isVisible ? "open" : ""}`}>
      <div className="navbar__menu">
        {menuItems.map((item) => (
          <div className="navbar__menu-item" key={item.name}>
            <a href={item.route}>{item.name}</a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Navbar;
