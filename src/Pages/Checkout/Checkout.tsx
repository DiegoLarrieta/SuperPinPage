import React from "react";

const Checkout: React.FC = () => {
  return (
    <>
      <style>
        {`
          .checkout-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            width: 100%;
            box-sizing: border-box;
          }

          .cart-items {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
            max-width: 1200px;
            margin-bottom: 20px;
          }

          .cart-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 8px;
            margin: 10px 0;
            width: 100%;
            max-width: 600px;
            box-sizing: border-box;
          }

          .cart-item img {
            max-width: 80px;
            border-radius: 8px;
            margin-right: 20px;
          }

          .cart-item-details {
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .cart-item-title {
            font-size: 1.2rem;
            margin-bottom: 5px;
          }

          .cart-item-price {
            font-size: 1rem;
            color: #666;
          }

          @media (max-width: 768px) {
            .cart-items {
              flex-direction: column;
              align-items: center;
            }

            .cart-item {
              width: 100%;
              text-align: center;
            }

            .cart-item img {
              margin-right: 0;
              margin-bottom: 10px;
            }
          }
        `}
      </style>
      <div className="checkout-container">
        <div className="cart-items">
          <div className="cart-item">
            <img src="/path/to/image.jpg" alt="Product" />
            <div className="cart-item-details">
              <div className="cart-item-title">Product Title</div>
              <div className="cart-item-price">$99.99</div>
            </div>
          </div>
          {/* Add more cart items as needed */}
        </div>
        {/* Add other checkout components as needed */}
      </div>
    </>
  );
};

export default Checkout;