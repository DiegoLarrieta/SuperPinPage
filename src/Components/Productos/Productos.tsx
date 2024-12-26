import React from "react";
import ProductosCard from "./ProductoCard";
import products from "../../data/Products"; // Importamos los productos de Products.ts

const Productos: React.FC = () => {
  return (
    <>
      <style>
        {`
          .productos-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 5vh; /* Responsive top margin */
            width: 100%;
            padding: 5vh 0; /* Vertical padding based on viewport height */
          }
          .productos-container h2 {
            font-size: 5vw; /* Dynamic title size based on the screen */
            text-align: center;
            margin-bottom: 3vh; /* Margin for spacing */
            color:black;
          }

          .productos-grid {
            display: flex;
            gap: 2vw; /* Dynamic gap between cards */
            flex-wrap: wrap;
            justify-content: center;
            width: 90%; /* Max width of the cards container */
          }

          .productos-card {
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

          .productos-card:hover {
            transform: scale(1.05); /* Slightly enlarge the card on hover */
          }

          .productos-card img {
            width: 100%;
            border-radius: 8px;
          }

          .productos-card button {
            padding: 10px 20px;
            background-color: #00bfff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
          }

          /* Estilos responsivos */
          @media (max-width: 768px) {
            .productos-grid {
              flex-direction: column; /* Stack the cards vertically */
              align-items: center;
            }
            .productos-card {
              width: 90%; /* Full width on smaller screens */
          }
        `}
      </style>
      <div className="productos-container">
        <h2>Featured Products</h2>
        <div className="productos-grid">
          {products.map((product) => (
            <ProductosCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Productos;