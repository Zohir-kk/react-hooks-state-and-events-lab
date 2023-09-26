import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Create a state variable for toggling dark and light modes
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Define the CSS class based on the isDarkMode state
  const appClass = isDarkMode ? "App dark" : "App light";

  // Function to toggle dark and light modes
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle the state
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
