import React, { useState } from "react";

function Item({ name, category }) {
  // Create a state variable to track whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Function to toggle the item's cart status
  const toggleCartStatus = () => {
    setIsInCart(!isInCart); // Toggle the state
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
