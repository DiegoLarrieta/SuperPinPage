import React from "react";
import "./App.css"; // Archivo CSS para los estilos globales
import Header from "./Components/Header/Header";
import Promo from "./Components/Promo/Promo";
import ModelViewer from "./Components/ModelViewer/ModelViewer";
import Modelos from "./Components/Modelos/Modelos";
import CardList from "./Components/Cards/CardList";
import Footer from "./Components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Promo />
      <ModelViewer modelPath="/models/cartera.glb" /> {/* Update the path to your model file */}
      <Modelos/>
{/* quite cardlist */}
      <Footer/>
      
    </div>
  );
};

export default App;