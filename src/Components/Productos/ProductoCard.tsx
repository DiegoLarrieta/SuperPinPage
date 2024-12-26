import React from "react";
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductoCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      <style>
        {`
          .productos-card {
            background: white;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
          }

          .productos-card:hover {
            transform: scale(1.05); /* Slightly enlarge the card on hover */
          }

          .productos-card img {
            width: 100%;
            border-radius: 8px;
          }

          .productos-card h3 {
            font-family: 'Roboto', sans-serif;
            font-size: 1.5rem;
            color: #333;
            margin: 10px 0;
          }

          .productos-card p {
            font-size: 1.2rem;
            color: #666;
            margin: 10px 0;
          }


        `}
      </style>
      <div className="productos-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.images[0]} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
        <p>{`$ ${product.price.toFixed(2)} MXN`}</p>
      </Link>
      </div>
    </>
  );
};

export default ProductoCard;