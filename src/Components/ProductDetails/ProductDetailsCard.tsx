import React, { useState } from 'react'; 
import { Product } from '../../data/Products'; // Importar la interfaz Product desde Products.ts 
import Stars from '../Stars/Stars'; 
import Quantity from '../Button/Quantity'; 
import AddToCartButton from '../Button/AddToCard';

interface ProductDetailsCardProps { 
  product: Product; // Usamos la interfaz importada 
}

const ProductDetailsCard: React.FC<ProductDetailsCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);  // Aquí agregamos el estado de la cantidad seleccionada

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);  // Actualiza la cantidad seleccionada
  };

  // Crear un objeto con solo las propiedades necesarias para AddToCartButton
  const productForButton = {
    id: product.id,
    modelName: product.name,  // Aquí mantenemos `name` como `modelName`
    price: product.price,
    quantity: quantity,  // Usamos la cantidad que se maneja en el estado
    image: product.images[0], // Aquí agregamos la primera imagen
  };

  return (
    <div className="product-details-card">
      <style>
        {`
          .product-details-card {
            display: flex;
            justify-content: space-between;
            padding: 2rem;
            gap: 2rem;
            flex-wrap: wrap;
          }

          .product-images {
            flex: 1;
            max-width: 45%;
          }

          .product-images img {
            width: 100%;
            border-radius: 8px;
            object-fit: cover;
          }

          .product-info {
            flex: 1;
            max-width: 45%;
            display: flex;
            flex-direction: column; /* Apilar los elementos verticalmente */
            align-items: flex-start; /* Alinear todo a la izquierda */
          }

          .product-info h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .product-info p {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }

          .product-info .price {
            font-size: 1.5rem;
            color: #00bfff;
            margin-bottom: 1rem;
          }

          .product-info .description {
            font-size: 1.1rem;
            color: #555;
          }

          /* Responsiveness */
          @media (max-width: 768px) {
            .product-details-card {
              flex-direction: column;
              align-items: center;
            }

            .product-images,
            .product-info {
              max-width: 100%;
              text-align: center;
            }
          }
        `} 
      </style>

      <div className="product-images">
        <img src={product.images[0]} alt={product.name} />
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <div className="price">${product.price.toFixed(2)}</div>
        <Stars value={Number(product.stars)} reviews={product.reviews} />

        {/* Solo mostramos la cantidad una vez */}
        <Quantity onQuantityChange={handleQuantityChange} />  {/* Pasamos la función onQuantityChange al componente Quantity */}

        {/* El componente AddToCartButton recibe la cantidad del estado */}
        <AddToCartButton product={productForButton} />
        <div className="description">{product.description}</div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
