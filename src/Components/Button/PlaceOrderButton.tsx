import React, { useState } from 'react';
import { useCart } from '../Context/CartContext'; // Para acceder al carrito
import { AiOutlineCheckCircle } from 'react-icons/ai'; // Ícono de confirmación
import WhatsappWarning from '../WhatsappWarning/WhatsappWarning'; // Importa el componente WhatsAppWarning

const PlaceOrderButton: React.FC<{ userData: any }> = ({ userData }) => {
  const { cart } = useCart(); // Obtener los productos del carrito
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [showWarning, setShowWarning] = useState(false); // Estado para controlar la visibilidad del WhatsAppWarning

  // Función para guardar la orden y enviar por WhatsApp
  const handlePlaceOrder = () => {
    // Validar si hay productos en el carrito y datos de usuario
    if (cart.length === 0 || !userData || Object.values(userData).includes('')) {
      alert("Por favor, completa todos los datos antes de realizar el pedido.");
      return;
    }

    // Crear un objeto con los detalles del pedido
    const orderDetails = {
      user: {
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        address: userData.address,
        city: userData.city,
        postalCode: userData.postalCode,
        state: userData.state,
      },
      products: cart.map((product) => ({
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        total: product.price * product.quantity,
      })),
      totalAmount: cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ),
      orderDate: new Date().toISOString(),
    };

    // Simular el guardado del pedido (aquí se podría hacer una llamada a una API)
    console.log('Order placed successfully:', orderDetails);

    // Guardar la orden en localStorage o backend, por ejemplo:
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    // Crear el mensaje para WhatsApp (convertir el JSON a un formato legible)
    const message = `Pedido de ${orderDetails.user.firstName} ${orderDetails.user.lastName}:\n` +
                    `Productos:\n` +
                    orderDetails.products.map(product => 
                      `- ${product.name}: ${product.quantity} x $${product.price} = $${product.total}`
                    ).join("\n") +
                    `\nTotal: $${orderDetails.totalAmount.toFixed(2)}\n` +
                    `Dirección: ${orderDetails.user.address}, ${orderDetails.user.city}, ${orderDetails.user.state}, ${orderDetails.user.postalCode}`;

    // Crear el enlace para WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+525652828123";  // El número de WhatsApp de la empresa
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Cambiar el estado para mostrar el éxito de la compra
    setOrderSuccess(true);

    // Mostrar la advertencia de WhatsApp
    setShowWarning(true);

    // Retraso de 3 segundos antes de redirigir a WhatsApp
    setTimeout(() => {
      window.open(whatsappLink, '_blank');  // Abre el chat de WhatsApp en una nueva pestaña
    }, 3000); // Espera 3 segundos antes de redirigir a WhatsApp

    // Verificar que la orden se haya guardado correctamente
    setTimeout(() => {
      console.log('Order saved successfully:', JSON.parse(localStorage.getItem('orderDetails') || '{}'));
    }, 2000); // Esto simula la verificación después de un pequeño retraso

    // Ocultar el WhatsAppWarning después de 4 segundos
    setTimeout(() => {
      setShowWarning(false);
    }, 4000);
  };

  return (
    <>
      <style>
        {`
          /* Estilos para el botón de realizar pedido */
          .place-order-btn {
            background-color: #00bfff;
            color: white;
            padding: 12px 20px;
            font-size: 1.2rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
            max-width: 200px;
            margin: 1rem auto;
            transition: background-color 0.3s;
          }

          .place-order-btn:hover {
            background-color: #0088cc;
          }

          /* Estilos para el mensaje de éxito */
          .place-order-button-container {
            text-align: center;
            font-size: 1.2rem;
            margin-top: 2rem;
          }
        `}
      </style>
      <div className="place-order-button-container">
        {!orderSuccess ? (
          <button onClick={handlePlaceOrder} className="place-order-btn">
            <span>Place Order</span>
          </button>
        ) : (
          <div style={{ color: '#00bfff', fontSize: '1.2rem' }}>
            <AiOutlineCheckCircle style={{ marginRight: '10px' }} />
            Order Placed Successfully!
          </div>
        )}
      </div>

      {/* Mostrar WhatsAppWarning si está activado */}
      {showWarning && <WhatsappWarning />}
    </>
  );
};

export default PlaceOrderButton;
