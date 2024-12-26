import React, { useState } from "react";
import Stars from "../Stars/Stars";
import AddToCartButton from "../Button/AddToCard";

// Component to display each model's information
const SubCard: React.FC<{ model: { modelName: string; images: string[]; features: string[]; price: number; image: string; id: string } }> = ({
  model,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageChange = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <>
      <style>
        {`
          .sub-card h3 {
            font-family: 'Roboto', sans-serif;
            font-size: 2rem;
            color: #333;
          }

          .features li {
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            color: #555;
            margin-bottom: 0.8rem;
          }

          .stars-container {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-top: 1rem;
          }

          .add-to-cart-container {
            margin-top: 1rem;
          }
        `}
      </style>

      <div className="sub-card">
        <h3>{model.modelName}</h3>
        
        <div className="carousel">
          {model.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Model ${model.modelName} image ${index}`}
              style={{ display: currentImage === index ? "block" : "none" }}
            />
          ))}
          <div className="carousel-controls">
            {model.images.map((_, index) => (
              <button key={index} onClick={() => handleImageChange(index)}>{index + 1}</button>
            ))}
          </div>
        </div>
        <ul className="features">
          {model.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="stars-container">
          <Stars value={5}/>
        </div>
        <div className="add-to-cart-container">
        <AddToCartButton product={{ ...model, quantity: 1, name: model.modelName }} /> {/* Add "name" here */}
        </div>
      </div>
    </>
  );
};

export default SubCard;
