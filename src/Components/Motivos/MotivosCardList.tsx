import React from "react";
import Card from "./MotivosCard";
import { SpinADN, Spin6, SpinBeSmall, SpinBeBig } from "../../assets/images";

// Sample data for the cards
const cardData = [
  {
    title: "Porque comprar?",
    image: SpinBeBig, // Use the image directly
    description: "This is the description for Card 1."
  },
  {
    title: "Beneficios",
    image: SpinADN, // Use the image directly
    description: "This is the description for Card 2."
  },
  {
    title: "Mejor accesosio",
    image: SpinBeSmall, // Use the image directly
    description: "This is the description for Card 3."
  },
  {
    title: "Spin",
    image: Spin6, // Use the image directly
    description: "This is the description for Card 4."
  }
];

const MotivosCardList: React.FC = () => {
  return (
    <>
      <style>
        {`
          .card-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 20px;
          }

          .card-list .card {
            width: 48%; /* Two cards per row on large screens */
          }

          @media (max-width: 768px) {
            .card-list .card {
              width: 100%; /* One card per row on small screens */
            }
          }
        `}
      </style>
      <div className="card-list">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
};

export default MotivosCardList;