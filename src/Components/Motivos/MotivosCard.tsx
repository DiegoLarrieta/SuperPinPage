import React from "react";

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const MotivosCard: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="card">
      <style>
        {`
          .card {
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
            width: 300px;
            margin: 10px;
            text-align: center;
          }

          .card img {
            width: 100%;
            height: auto;
            max-width: 150px; /* Set a maximum width for the images */
            max-height: 150px; /* Set a maximum height for the images */
            object-fit: cover; /* Ensure the image covers the area without distortion */
            margin: 0 auto; /* Center the image horizontally */
          }

          .card-title {
            font-size: 1.5em;
            margin: 10px 0;
          }

          .card-description {
            font-size: 1em;
            margin: 10px;
          }
        `}
      </style>
      <img src={image} alt={title} />
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </div>
  );
};

export default MotivosCard;