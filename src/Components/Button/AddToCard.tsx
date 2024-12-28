import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai"; // Cart Icon
import { useCart } from "../Context/CartContext";
import CartIcon from "./CartIcon";

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
  const [resetButton, setResetButton] = useState(false); // Estado para reiniciar el botón después de la animación
  const [showCartIcon, setShowCartIcon] = useState(false); // Estado para mostrar el CartIcon

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

    addToCart(productWithFullDetails, product.quantity); // Usamos el estado quantity
    setAddedToCart(true); // Actualizamos el estado para mostrar el mensaje "Added"

    console.log("Cart after adding product:", cart); // Verifica el carrito después de agregar el producto

    // Esperamos 2 segundos después de que termine la animación y luego restauramos el estado inicial
    setTimeout(() => {
      setAddedToCart(false);
      setResetButton(true); // Reiniciar el estado para regresar al diseño original
      setTimeout(() => {
        setResetButton(false); // Desactivar el estado de reinicio
        setShowCartIcon(true); // Mostrar el CartIcon
      }, 500); // Esto es solo un pequeño retraso para cuando el botón vuelva a su estado inicial
    }, 2000); // Espera 2 segundos antes de regresar al estado inicial
  };

  return (
    <div className="button" style={{ position: "relative", display: "flex" }}>
      <motion.button
        className="addtocart-button"
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
          minWidth: "160px", // Esto asegura que el botón siempre tendrá un tamaño fijo mínimo
          minHeight: "40px", // Esto asegura que el botón siempre tendrá un tamaño fijo mínimo
        }}
      >
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          {!addedToCart && !resetButton && (
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

          {addedToCart && !resetButton && (
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
        </div>
      </motion.button>

      {/* Contenedor global cartButtons */}
      <div
        className="buttons-container"
        style={{
          display: "flex",
          justifyContent: "space-between", // Alinea ambos elementos a la derecha
          width: "100%",
          position: "relative",
        }}
      >
        {showCartIcon && (
          <motion.div className="Cart-Icon"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#00bfff",
              color: "#fff",
              borderRadius: "5px",
              padding: "10px 20px",
              cursor: "pointer",
              height: "30px", // Asegura que el icono tenga un tamaño constante
              marginLeft: "10px", // Esto agrega espacio entre el botón y el icono del carrito
            }}
          >
            <CartIcon />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AddToCartButton;
