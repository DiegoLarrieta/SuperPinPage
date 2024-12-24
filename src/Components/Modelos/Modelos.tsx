import React from "react";
import SubCard from "./SubCard"; // Import the SubCard component
import { 
  SpinADN, 
  Spin6, 
  SpinBeSmall, 
  SpinBeBig,
  Spin76main,
  Spin95main,
} from "../../assets/images";

// Sample data for the models
const modelData = [
  {
    modelName: " SuperPin 9.5mm ",
    images: [
      Spin95main, 
      SpinBeBig, 
      SpinADN,
    ],
    features: [
      "Diseñado para máquinas de placas grandes: Su diámetro de 9.5 mm se adapta a equipos de mayor tamaño.",
      "Ideal para entrenamientos exigentes: Soporta más peso, perfecto para rutinas de alta intensidad.",
      "Construcción sólida: Fabricado con acero resistente y polímero técnico de alto rendimiento"
    ]
  },
  {
    modelName: " SuperPin 7.6 mm ",
    images: [
      Spin76main, 
      SpinBeSmall,
      Spin6,
    ],
    features: [
      "Medida universal: Su diámetro de 7.6 mm se ajusta a la mayoría de máquinas de gimnasio.",
      "El más vendido: La opción favorita por su versatilidad y fácil adaptación a diferentes equipos de gimnasio.",
      "Diseño ligero: Su peso reducido facilita el manejo y transporte para entrenar donde quieras."
    ]
  }
];

const Modelos: React.FC = () => {
  return (
    <>
      <style>
        {`
          /* Main container for Modelos */
          .modelos {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 5vh; /* Responsive top margin */
            width: 100%;
            padding: 5vh 0; /* Vertical padding based on viewport height */
          }

          .modelos-title h2 {
            font-size: 5vw; /* Dynamic title size based on the screen */
            text-align: center;
            margin-bottom: 3vh; /* Margin for spacing */
            color:black;
          }

          .modelos-cards {
            display: flex;
            gap: 2vw; /* Dynamic gap between cards */
            flex-wrap: wrap;
            justify-content: center;
            width: 90%; /* Max width of the cards container */
          }

          .sub-card {
            background-color: #fff;
            border: 1px solid #ddd;
            width: 45%; /* 2 cards per row on larger screens */
            padding: 3vh 2vw; /* Adjust padding for a larger card */
            border-radius: 8px;
            text-align: center;
            box-sizing: border-box;
            margin-bottom: 3vh;
            transition: all 0.3s ease; /* Smooth transition for resize */
          }

          .sub-card:hover {
            transform: scale(1.05); /* Slightly enlarge the card on hover */
          }

          .carousel {
            position: relative;
            max-width: 100%;
            overflow: hidden;
          }

          .carousel img {
            width: 100%;
            max-height: 50vh; /* Dynamic height for images */
            object-fit: cover;
          }

          .carousel-controls button {
            margin-top: 2vh;
            cursor: pointer;
            padding: 10px 20px;
            background-color: #00bfff;
            color: white;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .carousel-controls button:hover {
            background-color: #0077b3;
          }

          /* Bullet points for the features */
          .features {
            list-style-type: none;
            padding: 0;
            margin-top: 2vh;
            font-size: 1.2rem;
            color: #555;
          }

          .features li {
            margin-bottom: 1vh;
          }

          /* Responsive design */
          @media (max-width: 768px) {
            .modelos-cards {
              flex-direction: column; /* Stack the cards vertically */
              align-items: center;
            }

            .sub-card {
              width: 90%; /* Full width on small screens */
            }

            .modelos-title h2 {
              font-size: 8vw; /* Adjust the title font size on small screens */
            }

            .carousel img {
              max-height: 40vh; /* Make the images larger in the carousel on small screens */
            }

            .carousel-controls button {
              font-size: 1.2rem;
              padding: 8px 16px;
            }
          }
        `}
      </style>

      <div className="modelos">
        <div className="modelos-title">
          <h2>2 modelos, 1 resultado</h2>
        </div>
        <div className="modelos-cards">
          {modelData.map((model, index) => (
            <SubCard key={index} model={model} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Modelos;
