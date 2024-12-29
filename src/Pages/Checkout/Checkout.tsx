import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import OrderSummary from '../../Components/OrderSummary/OrderSumarry';
import UserData from '../../Components/UserData/UserData';
import PlaceOrderButton from '../../Components/Button/PlaceOrderButton';

const Checkout: React.FC = () => {
  const [userData, setUserData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    state: '',
  });

  return (
    <>
      <style>
        {`
          .checkout-container {
            display: flex;
            justify-content: space-between;
            gap: 2rem;
            padding: 2rem;
          }

          .checkout-form {
            flex: 1;
            max-width: 60%;
          }

          .checkout-summary {
            flex: 1;
            max-width: 35%;
          }

          @media (max-width: 768px) {
            .checkout-container {
              flex-direction: column;
              align-items: center;
            }

            .checkout-form, .checkout-summary {
              max-width: 100%;
            }
          }
        `}
      </style>
      <Header />
      <div className="checkout-container">

        {/* User Data */}
        <div className="checkout-form">
          <UserData userData={userData} setUserData={setUserData} />
        </div>

        {/* Order Summary */}
        <div className="checkout-summary">
          <OrderSummary />
        </div>

        {/* Place Order Button */}
        <PlaceOrderButton userData={userData} />
      </div>
    </>
  );
};

export default Checkout;
