import React from "react";
import Header from "./Components/Header/Header";
import Promo from "./Components/Promo/Promo";
import Footer from "./Components/Footer/Footer";
import "./App.css"; // Archivo CSS para los estilos globales

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Footer/>
    </div>
  );
};

export default App;
