// src/pages/products/ProductDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/Products'; // Asegúrate de que la ruta sea correcta
import ProductDetailsCard from '../../Components/ProductDetails/ProductDetailsCard';

const ProductDetails: React.FC = () => {
  const { productId } = useParams(); // Obtener el ID del producto desde la URL

  // Buscar el producto en la lista de productos usando el productId
  const product = products.find(item => item.id === productId);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-details">
      <ProductDetailsCard product={product} />
    </div>
  );
};

export default ProductDetails;
