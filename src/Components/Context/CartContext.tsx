import React, { createContext, useState, useContext, ReactNode } from 'react';
import  { Product } from '../../data/Products'; // Importa el archivo de productos

// Define el tipo de contexto
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

// Crea el contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider que envolverá toda la app
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Función para agregar productos al carrito
  const addToCart = (product: Product, quantity: number) => {
    if (quantity <= 0) return; // Prevenir agregar cantidades inválidas

    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        // Si el producto ya está, solo incrementamos la cantidad
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity } // Incrementar la cantidad en lugar de establecerla a 1
            : item
        );
      } else {
        // Si el producto no está en el carrito, lo agregamos con la cantidad especificada
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Función para eliminar productos
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  // Función para actualizar la cantidad de un producto
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) return; // Evitar cantidades inválidas
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
