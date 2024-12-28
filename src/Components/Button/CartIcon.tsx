import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai"; // Icono del carrito
import { useCart } from '../Context/CartContext'; // Acceder al contexto del carrito
import { Link } from "react-router-dom"; // Import Link for routing

const CartIcon: React.FC = () => {
  const { cart } = useCart(); // Obtener el carrito desde el contexto

  // Calcular el número total de artículos en el carrito
  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <Link to="/cart">
      <div style={{ position: "relative", display: "inline-block" }}>
      <AiOutlineShoppingCart style={{ fontSize: "40px", color: "white" }} />
      
      {/* Mostrar el contador de artículos sobre el icono */}
      {totalItems > 0 && (
        <div className='cart-counter'
          style={{
            position: "absolute",
            top: "-20px",
            right: "-15px",
            backgroundColor: "#ff4d4f",
            color: "#fff",
            borderRadius: "50%",
            padding: "5px 10px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {totalItems}
        </div>
      )}
      </div>
    </Link> 
  );
};

export default CartIcon;
