import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai"; // Cart Icon
import { useCart } from "../Context/CartContext";

// Definimos el tipo que solo usa las propiedades necesarias
interface AddToCartProduct {
  id: string;
  modelName: string;
  price: number;
  image: string;
  quantity: number;
}

const AddToCartButton: React.FC<{ product: AddToCartProduct }> = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { cart, addToCart } = useCart(); // Get addToCart function from context

  useEffect(() => {
    // Verificamos si el producto ya está en el carrito
    const isProductInCart = cart.some(item => item.id === product.id);
    setAddedToCart(isProductInCart);
    console.log("Cart after checking:", cart); // Verifica el carrito después de verificar si el producto ya está presente
  }, [cart, product.id]);

  const handleClick = () => {
    // Completar el producto con los valores necesarios
    const productWithFullDetails = {
      ...product,
      name: product.modelName, // Derivamos el nombre del modelo
      images: [product.image], // Asumimos que solo tienes una imagen
      description: "Descripción no disponible", // Valor predeterminado
      stars: 0, // Valor predeterminado para las estrellas
      reviews: 0, // Valor predeterminado para los comentarios
    };

    console.log("Product with full details:", productWithFullDetails); // Verifica el producto con todos los datos antes de agregarlo al carrito

    addToCart(productWithFullDetails, product.quantity); // Agregar al carrito
    setAddedToCart(true); // Actualizamos el estado para mostrar el mensaje "Added"

    console.log("Cart after adding product:", cart); // Verifica el carrito después de agregar el producto
  };

  return (
    <div className="button" style={{ position: "relative", display: "inline-block" }}>
      <motion.button
        className="button-elements"
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "none",
          backgroundColor: "#00bfff",
          color: "#fff",
          borderRadius: "5px",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {!addedToCart && (
          <>
            <AiOutlineShoppingCart 
            className="cart-icon"
            style={{
              marginRight: "10px",
              display: "inline-block",
              }} 
            />
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Add to Cart
            </motion.span>
          </>
        )}

        {addedToCart && (
          <>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "100px" }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 200,
                damping: 25,
              }}
            >
              <AiOutlineShoppingCart 
                style={{
                  marginRight: "10px" 
                }}
              />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
                duration: 0.5,
              }}
              style={{
                display: "flex",        // Utilizamos flexbox para centrar el texto
                justifyContent: "center",  // Asegura que el contenido se centre horizontalmente
                alignItems: "center",   // Asegura que el contenido se centre verticalmente
                marginLeft: "0px",      // Eliminar cualquier margen izquierdo
              }}
            >
              Added
            </motion.span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default AddToCartButton;
