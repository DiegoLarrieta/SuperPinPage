import React, { useState, useEffect } from "react";
import { NavidadPromo } from "../../assets/images";

const Promo: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Formateamos el tiempo en días, horas, minutos y segundos
  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (60 * 60 * 24));
    const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: secs,
    };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <>
      <style>
        {`
          .promo {
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url(${NavidadPromo});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            color: #fff;
            width: 100%;
            height: 150px;
            box-sizing: border-box;
            overflow: hidden;
            transition: opacity 0.5s ease;
          }

          .promo__content {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 80%;
            text-align: center;
          }

          .promo__message {
            font-size: 1.5rem;
            font-weight: bold;
            margin-right: 20px;
            text-align: center;
          }

          .promo__timer {
            display: flex;
            justify-content: center;
            gap: 10px;
            font-size: 2rem;
            font-weight: bold;
          }

          .promo__time-box {
            background-color: rgba(0, 0, 0, 0.6);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 70px;
            padding: 10px;
          }

          .promo__time-box span {
            font-size: 1rem;
            margin-top: 5px;
          }

          /* Ajustes responsivos */
          /* Ajustes para pantallas pequeñas */
          @media (max-width: 1024px) {
            .promo__message {
              font-size: 1.3rem;
            }

            .promo__timer {
              font-size: 1.8rem;
            }

            .promo__time-box {
              width: 60px;
              padding: 8px;
            }

            .promo__time-box span {
              font-size: 0.9rem;
            }
          }

          @media (max-width: 768px) {
            .promo__message {
              font-size: 1.2rem;
            }

            .promo__timer {
              font-size: 1.6rem;
            }

            .promo__time-box {
              width: 50px;
              padding: 6px;
            }

            .promo__time-box span {
              font-size: 0.8rem;
            }

            .promo__content {
              flex-direction: column; /* Make text appear above the timer */
            }
          }

          @media (max-width: 480px) {
            .promo__message {
              font-size: 1rem;
            }

            .promo__timer {
              font-size: 1.4rem;
            }

            .promo__time-box {
              width: 45px;
              padding: 5px;
            }

            .promo__time-box span {
              font-size: 0.7rem;
            }
          }
        `}
      </style>
      <div className="promo">
        <div className="promo__content">
          <div className="promo__message">
            <div>Felices Fiestas</div>
            <div>El mejor regalo esta aqui!</div>
          </div>
          <div className="promo__timer">
            <div className="promo__time-box">
              {days < 10 ? `0${days}` : days}
              <span>days</span>
            </div>
            <div className="promo__time-box">
              {hours < 10 ? `0${hours}` : hours}
              <span>hrs</span>
            </div>
            <div className="promo__time-box">
              {minutes < 10 ? `0${minutes}` : minutes}
              <span>min</span>
            </div>
            <div className="promo__time-box">
              {seconds < 10 ? `0${seconds}` : seconds}
              <span>sec</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
