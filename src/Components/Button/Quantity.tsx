import React, { useState } from 'react';

const Quantity: React.FC = () => {
  // Estado para almacenar la cantidad seleccionada
  const [quantity, setQuantity] = useState<number>(1); // Inicialmente 1

  // Función para incrementar la cantidad
  const increment = () => {
    setQuantity(quantity + 1); // Incrementa la cantidad en 1
  };

  // Función para decrementar la cantidad
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Decrementa la cantidad en 1, pero no permite que sea menor que 1
    }
  };

  return (
    <div>
      <label>Cantidad</label>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Distribuye los elementos equitativamente
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '5px 10px',
        maxWidth: '150px',
        marginTop: '10px',
        marginBottom: '10px',
        backgroundColor:'black',
      }}>
        <button onClick={decrement} disabled={quantity <= 1} style={{
          border: 'none',
          padding: '5px 10px',
          cursor: 'pointer',
          borderRadius: '5px',
          backgroundColor:'black',
          flex: 1, // Hace que el botón ocupe el espacio necesario
        }}>-</button>

        <span style={{
          margin: '0 10px',
          fontSize: '16px',
          fontWeight: 'bold',
          width: '30px',
          textAlign: 'center',
          flex: 1, // Asegura que el número esté centrado y ocupe el espacio disponible
        }}>{quantity}</span>

        <button onClick={increment} style={{
          backgroundColor:'black',
          border: 'none',
          padding: '5px 10px',
          cursor: 'pointer',
          borderRadius: '5px',
          flex: 1, // Hace que el botón ocupe el espacio necesario
        }}>+</button>
      </div>
    </div>
  );
};

export default Quantity;
