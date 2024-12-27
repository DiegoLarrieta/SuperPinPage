import React from 'react';
import Header from '../../Components/Header/Header';
import Cart from '../../Components/Cart/Cart'; // Ajusta la ruta según tu estructura de carpetas

const CartPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="cart-page">
        <Cart /> {/* Aquí insertamos el componente Cart */}
      </div>
    </>
  );
};

export default CartPage;