import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css"; // Global CSS file
import { CartProvider } from "./Components/Context/CartContext";


import AppRoutes from "./Routes/AppRoutes"; // Import the AppRoutes component

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <AppRoutes /> {/* Usamos AppRoutes para manejar las rutas de la aplicación */}
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
