import React from "react";
import "./App.css"; // Archivo CSS para los estilos globales
import Header from "./Components/Header/Header";
import Promo from "./Components/Promo/Promo";
import ModelViewer from "./Components/ModelViewer/ModelViewer";
import Footer from "./Components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Promo />
      <ModelViewer modelPath="/models/cartera.glb" /> {/* Update the path to your model file */}
      <Footer/>
      
    </div>
  );
};

export default App;