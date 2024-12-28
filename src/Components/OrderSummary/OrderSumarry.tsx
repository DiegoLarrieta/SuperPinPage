import React from 'react';
import { useCart } from '../Context/CartContext';  // To get cart data

const OrderSummary: React.FC = () => {
  const { cart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <>
      <style>
        {`
          .order-summary {
            padding: 1rem;
            background-color: white;
            border-radius: 8px;
            border: 1px solid #ddd;
          }

          .order-summary h2 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .order-summary-items {
            margin-bottom: 1rem;
          }

          .order-summary-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
          }

          .order-summary-item-image img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 5px;
          }

          .order-summary-item-details {
            flex: 1;
            margin-left: 1rem;
          }

          .order-summary-total p {
            font-weight: bold;
            font-size: 1.2rem;
            color: #00bfff;
          }

          /* Mobile responsiveness */
          @media (max-width: 768px) {
            .order-summary {
              margin-top: 1rem;
            }

            .order-summary-items {
              display: flex;
              flex-direction: column;
            }

            .order-summary-item {
              flex-direction: column;
              align-items: flex-start;
            }

            .order-summary-item-details {
              margin-left: 0;
            }
          }
        `}
      </style>
      <div className="order-summary">
        <h2>Order summary</h2>
        <div className="order-summary-items">
          {cart.map(product => (
            <div key={product.id} className="order-summary-item">
              <div className="order-summary-item-image">
                <img src={product.images[0]} alt={product.name} />
              </div>
              <div className="order-summary-item-details">
                <p>{product.name}</p>
                <p>{product.quantity} x ${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="order-summary-total">
          <p><strong>Total:</strong> ${calculateTotal().toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;