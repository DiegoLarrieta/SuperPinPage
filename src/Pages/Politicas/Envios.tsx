import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const PoliticaEnvios: React.FC = () => {
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
        <h2>Política de Envío</h2>
        <p>
          En <strong>SuperPinStore</strong> nos aseguramos de que tu producto
          llegue de manera rápida y segura. Trabajamos con las principales
          paqueterías, como <strong>FedEx</strong>, <strong>Estafeta</strong> y
          <strong>DHL</strong>, para garantizar que tu compra sea entregada en
          las mejores condiciones.
        </p>
        <p>
          Todos los envíos son procesados dentro de un plazo de 24-48 horas
          hábiles, y la mayoría de los pedidos son entregados en un plazo de 5-7
          días laborables, dependiendo de la ubicación.
        </p>
        <p>
          Nuestra prioridad es asegurarnos de que tu producto llegue en perfecto
          estado, por lo que tomamos medidas adicionales en el embalaje para
          evitar daños durante el envío.
        </p>
        <p>
          Si tienes algún problema con tu envío, no dudes en ponerte en contacto
          con nosotros a través de nuestro centro de atención al cliente. Estaremos
          encantados de ayudarte a resolver cualquier inconveniente.
        </p>
      </div>
    <Footer />
    </>
  );
};

export default PoliticaEnvios;
