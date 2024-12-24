import React from "react";
import Header from "../../Components/Header/Header";
import Promo from "../../Components/Promo/Promo";
import ModelViewer from "../../Components/ModelViewer/ModelViewer";
import Modelos from "../../Components/Modelos/Modelos";
//import CardList from "../../Components/Cards/CardList";
import Footer from "../../Components/Footer/Footer";

const Main: React.FC = () => {
  return (
    <>
      <style>
        {`
          .MainPage {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            min-height: 100vh; /* Ensures the content occupies the full height of the page */
            box-sizing: border-box;
          }
        `}
      </style>
      <div className="MainPage">
        <Header />
        <Promo />
        <ModelViewer modelPath="/models/cartera.glb" /> {/* Update the path to your model file */}
        <Modelos />
        {/* Removed CardList */}
        <Footer />
      </div>
    </>
  );
};

export default Main;