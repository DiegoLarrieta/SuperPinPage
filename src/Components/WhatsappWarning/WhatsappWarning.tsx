import React, { useState, useEffect } from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai'; // WhatsApp Icon

const WhatsappWarning: React.FC = () => {
  const [showWarning, setShowWarning] = useState(true);

  useEffect(() => {
    // Ocultamos el mensaje después de 5 segundos
    const timer = setTimeout(() => {
      setShowWarning(false);
    }, 5000); // El mensaje desaparece después de 5 segundos

    // Limpiamos el timer si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  if (!showWarning) return null; // No renderizamos el componente si no se debe mostrar

  return (
    <>
      <style>
        {`
          .whatsapp-warning {
            display: flex;
            align-items: center;
            background-color: #25d366; /* WhatsApp Green */
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            position: fixed;
            top: 20px; /* Mover el warning a la parte superior */
            right: 20px; /* Mover el warning a la derecha */
            z-index: 1000; /* Asegura que se muestre sobre otros contenidos */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
            animation: slideUp 1s ease-out, fadeOut 4s 5s forwards; /* Espera 5 segundos antes de comenzar a desaparecer */
          }

          .whatsapp-icon {
            font-size: 24px;
            margin-right: 10px;
          }

          .warning-text {
            font-size: 14px;
            max-width: 300px;
          }

          /* Animación para entrar desde la parte superior */
          @keyframes slideUp {
            0% {
              transform: translateY(-100px); /* Comienza desde arriba */
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          /* Animación para desaparecer hacia arriba */
          @keyframes fadeOut {
            100% {
              opacity: 0;
              transform: translateY(-100px); /* Movimiento hacia arriba cuando desaparece */
            }
          }
        `}
      </style>
      <div className="whatsapp-warning">
        <AiOutlineWhatsApp className="whatsapp-icon" />
        <div className="warning-text">
          Para finalizar el pedido, únicamente manda el mensaje y tu orden será procesada.
        </div>
      </div>
    </>
  );
};

export default WhatsappWarning;
