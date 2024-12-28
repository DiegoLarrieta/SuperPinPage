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
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // Estado para la imagen actual

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);  // Actualiza la cantidad seleccionada
  };

  const handleNextImage = () => {
    if (currentImageIndex < product.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0); // Volver al principio si ya estamos en la última imagen
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(product.images.length - 1); // Volver al final si estamos en la primera imagen
    }
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
            position: relative; /* Para posicionar los botones de navegación */
            height: 400px; /* Altura fija para que todas las imágenes tengan el mismo tamaño */
            width: 100%; /* Establecer el ancho 100% del contenedor */
            overflow: hidden; /* Para ocultar cualquier parte de la imagen que sobresalga */
          }

          .product-images img {
            width: 100%;
            height: 100%;
            object-fit: contain; /* Ajustar la imagen dentro del contenedor sin deformarse */
            transition: opacity 0.5s ease-in-out;
            
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
            color: #333;
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
            color: #333;
            padding-top: 1rem;
          }

          .product-info .description strong {
            font-size: 1.2rem;
            color: #000;
            font-weight: bold;
          }

          .carousel-controls {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
          }

          .carousel-controls button {
            background-color: rgba(0, 0, 0, 0.5);
            border: none;
            color: white;
            font-size: 1.5rem;
            padding: 10px;
            cursor: pointer;
            border-radius: 50%;
          }

          .carousel-controls button:hover {
            background-color: rgba(0, 0, 0, 0.8);
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
        <img src={product.images[currentImageIndex]} alt={product.name} />
        <div className="carousel-controls">
          <button onClick={handlePrevImage}>←</button>
          <button onClick={handleNextImage}>→</button>
        </div>
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <div className="price">${product.price.toFixed(2)}</div>
        <Stars value={Number(product.stars)} reviews={product.reviews} />

        {/* Solo mostramos la cantidad una vez */}
        <Quantity onQuantityChange={handleQuantityChange} />  {/* Pasamos la función onQuantityChange al componente Quantity */}

        {/* El componente AddToCartButton recibe la cantidad del estado */}
        <AddToCartButton product={productForButton} />
        <div className="description" dangerouslySetInnerHTML={{ __html: product.description }} />

      </div>
    </div>
  );
};

export default ProductDetailsCard;
