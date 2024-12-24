import React from "react";

// Tipo de las propiedades (props) que recibirá el componente
interface ComoFuncionaCardProps {
  videoSrc: string;
  title: string;
  description: string;
}

const ComoFuncionaCard: React.FC<ComoFuncionaCardProps> = ({
  videoSrc,
  title,
  description,
}) => {
  return (
    <>
      <style>
        {`
          .como-funciona-card {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            margin: 10px 0;
            background-color: #fff;
          }

          .como-funciona-video {
            flex: 1;
            max-width: 40%;
            margin-right: 20px;
          }

          .como-funciona-video video {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }

          .como-funciona-text {
            flex: 1;
            max-width: 60%;
            color: #333; /* Change the font color here */
          }

          .como-funciona-text h2 {
            font-size: 2rem;
            margin-bottom: 10px;
            color: #333; /* Change the font color here */
          }

          .como-funciona-text p {
            font-size: 1.1rem;
            margin-bottom: 20px;
            color: #666; /* Change the font color here */
          }
        `}
      </style>
      <div className="como-funciona-card">
        <div className="como-funciona-video">
          <video controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="como-funciona-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ComoFuncionaCard;