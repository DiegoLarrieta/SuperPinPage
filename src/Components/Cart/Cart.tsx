import React from 'react';
import { useCart } from '../Context/CartContext'; // Obtener los datos del carrito
import { AiOutlineDelete } from 'react-icons/ai'; // Ícono de eliminar producto
import './Cart.css'; // Aquí pondremos los estilos
import { Link } from "react-router-dom"; // Import Link for routing


const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1>Tu carrito</h1>
      <div className="cart-items">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <div className="cart-item-image">
              <img src={product.images[0]} alt={product.name} />
            </div>
            <div className="cart-item-info">
              <p className="cart-item-name">{product.name}</p>
              <p className="cart-item-price">${product.price}</p>
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
            </div>
            <div className="cart-item-total">
              <p>${(product.price * product.quantity).toFixed(2)}</p>
            </div>
            <div className="cart-item-remove">
              <AiOutlineDelete onClick={() => removeFromCart(product.id)} />
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Total estimado: ${calculateTotal().toFixed(2)}</p>
        <Link to="/checkout">
          <button className="checkout-btn">Pagar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
