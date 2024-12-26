import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Pages/Main/Main';
import Blog from '../Pages/Blog/Blog';
import ComoFunciona from '../Pages/ComoFunciona/ComoFunciona';
import Checkout from '../Pages/Checkout/Checkout';
import ProductDetails from '../Pages/Products/ProductDetails';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/como-funciona" element={<ComoFunciona />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
