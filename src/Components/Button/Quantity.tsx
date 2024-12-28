import React, { useState } from 'react';

interface QuantityProps {
  onQuantityChange: (quantity: number) => void; // Propiedad para pasar la cantidad seleccionada al componente padre
}

const Quantity: React.FC<QuantityProps> = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState<number>(1);

  // Función para incrementar la cantidad
  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity); // Notificar al componente padre sobre el cambio
  };

  // Función para decrementar la cantidad
  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity); // Notificar al componente padre sobre el cambio
    }
  };

  return (
    <div style={{ padding: '10px 0'}}>
      <label style={{color:'black'}}>Cantidad</label>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #ccc', borderRadius: '5px', padding: '5px 10px', maxWidth: '150px', marginTop: '10px', marginBottom: '10px', backgroundColor:'black' }}>
        <button onClick={decrement} disabled={quantity <= 1} style={{ border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '5px', backgroundColor:'black', flex: 1 }}>
          -
        </button>

        <span style={{ margin: '0 10px', fontSize: '16px', fontWeight: 'bold', width: '30px', textAlign: 'center', flex: 1 }}>
          {quantity}
        </span>

        <button onClick={increment} style={{ backgroundColor:'black', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '5px', flex: 1 }}>
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;
