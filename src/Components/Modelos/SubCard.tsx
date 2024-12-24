import React, { useState } from "react";

// Component to display each model's information
const SubCard: React.FC<{ model: { modelName: string; images: string[]; features: string[] } }> = ({
  model,
}) => {
  const [currentImage, setCurrentImage] = useState(0); // Track the current image in the carousel

  const handleImageChange = (index: number) => {
    setCurrentImage(index); // Update the current image index
  };

  return (
    <>
      <style>
        {`
          /* Change the font for the model name */
          .sub-card h3 {
            font-family: 'Roboto', sans-serif; /* Replace 'Roboto' with your chosen font */
            font-size: 2rem; /* Adjust the font size as needed */
            color: #333; /* Change the color of the model name if needed */
          
          }

          /* Change the font for the features list */
          .features li {
            font-family: 'Roboto', sans-serif; /* Apply the same or a different font */
            font-size: 1rem; /* Adjust font size for the feature items */
            color: #555; /* Adjust the color for features */
            margin-bottom: 0.8rem; /* Adjust the spacing between feature items */
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
              <button key={index} onClick={() => handleImageChange(index)}>
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <ul className="features">
          {model.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SubCard;
