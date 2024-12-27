import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Pages/Main/Main';
import Blog from '../Pages/Blog/Blog';
import ComoFunciona from '../Pages/ComoFunciona/ComoFunciona';
import CartPage from '../Pages/Cart/Cart';
import ProductDetails from '../Pages/Products/ProductDetails';
import Checkout from '../Pages/Checkout/Checkout';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/como-funciona" element={<ComoFunciona />} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AppRoutes;
