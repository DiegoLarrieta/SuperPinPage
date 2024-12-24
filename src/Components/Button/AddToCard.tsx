import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai"; // Cart Icon

const AddToCartButton: React.FC = () => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleClick = () => {
    setAddedToCart(true); // Trigger the animation when clicked
  };

  return (
    <div className="button" style={{ position: "relative", display: "inline-block" }}>
      <motion.button className="button-elements"
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between", // Distribute the space evenly between the elements
          alignItems: "center", // Vertically center the items
          border: "none",
          backgroundColor: "#00bfff",
          color: "#fff",
          borderRadius: "5px",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Display "Add to Cart" initially */}
        {!addedToCart && (
          <>
            <AiOutlineShoppingCart className="cart-icon" style={{ marginRight: "10px" }} />
            <motion.span className="cart-text"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Add to Cart
            </motion.span>
          </>
        )}

        {/* Display "Added" after click */}
        {addedToCart && (
          <>
            {/* Cart moving animation */}
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

            {/* Text animation */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1, // Add a delay so it appears after the cart animation
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
