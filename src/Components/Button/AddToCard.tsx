import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai"; // Cart Icon
import { useCart } from "../Context/CartContext";

const AddToCartButton: React.FC<{ product: { id: string; modelName: string; price: number; image: string; quantity: number } }> = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart(); // Get addToCart function from context

  const handleClick = () => {
    addToCart(product); // Add the product to the cart when clicked
    setAddedToCart(true);
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
            <AiOutlineShoppingCart className="cart-icon" style={{ marginRight: "10px" }} />
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
              <AiOutlineShoppingCart style={{ marginRight: "10px" }} />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
                duration: 0.5,
              }}
              style={{ marginLeft: "0px" }}
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
