import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const PoliticaPrivacidad: React.FC = () => {
  return (
    <>
      <style>
        {`
          .policy-container {
            width: 80%;
            margin: 20px auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
          }

          .policy-container h2 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 1.5rem;
            color: #333;
          }

          .policy-container p {
            font-size: 1rem;
            color: #666;
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          .policy-container p strong {
            font-weight: bold;
            color: #333;
          }
        `}
      </style>
      <Header />
      <div className="policy-container">
        <h2>Política de Privacidad</h2>
        <p>
          En <strong>SuperPinStore</strong> nos tomamos muy en serio tu privacidad.
          Tu información personal es tratada con el mayor cuidado y respeto. Solo
          utilizamos tus datos para procesar tu pedido, mejorar nuestra experiencia
          de compra y mantenerte informado sobre nuestras promociones y novedades.
        </p>
        <p>
          No compartimos tu información con terceros, salvo en el caso de que sea
          necesario para completar la transacción de tu pedido o cuando lo requiera
          la ley.
        </p>
        <p>
          En cualquier momento, puedes solicitar que actualicemos o eliminemos
          tus datos de nuestros registros, y puedes optar por no recibir
          comunicaciones de marketing.
        </p>
        <p>
          Si tienes alguna pregunta o inquietud acerca de cómo manejamos tu
          privacidad, no dudes en ponerte en contacto con nosotros.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PoliticaPrivacidad;
