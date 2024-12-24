import React from "react";
import ComoFuncionaCard from "./ComoFuncionaCard";
import { Paso1Video, Paso2Video,Paso3Video } from "../../assets/images";
import Header from "../../Components/Header/Header";

const ComoFunciona: React.FC = () => {
  return (
    <>
      <style>
        {`
          .como-funciona-container {
            padding: 5vh 2vw;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .como-funciona-container h1 {
            font-size: 2rem;
            margin-bottom: 10px;
            color: #333; /* Change the font color here */
          }

          .como-funciona-cards {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: space-between;
          }

          @media (max-width: 768px) {
            .como-funciona-cards {
              flex-direction: column;
            }

            .como-funciona-card {
              flex-direction: column;
              text-align: center;
            }

            .como-funciona-video {
              max-width: 100%;
            }

            .como-funciona-text {
              max-width: 100%;
            }

            .como-funciona-video video {
              width: 100%;
            }
          }
        `}
      </style>
      <Header />
      <div className="como-funciona-container">
        <h1>Cómo funciona</h1>
        <div className="como-funciona-cards">
          {/* Usamos el componente ComoFuncionaCard para cada paso */}
          <ComoFuncionaCard
            videoSrc={Paso1Video}
            title="Paso 1: Empaque del producto"
            description="En este paso, el producto es cuidadosamente empaquetado para garantizar que llegue en perfectas condiciones."
          />
          <ComoFuncionaCard
            videoSrc={Paso2Video}
            title="Paso 2: Envío"
            description="Una vez empaquetado, el producto es enviado a la dirección indicada por el cliente."
          />
          <ComoFuncionaCard
            videoSrc={Paso3Video}
            title="Paso 3: Utilizarlo"
            description="Una vez empaquetado, el producto es enviado a la dirección indicada por el cliente."
          />
          {/* Agregar más pasos de forma similar */}
        </div>
      </div>
    </>
  );
};

export default ComoFunciona;
