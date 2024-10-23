// src/ContextProvider/StoreContext.js
import { createContext, useState } from 'react';
import { food_list, restaurants } from '../Assets/frontend_assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [selectedRestaurant, setSelectedRestaurant] = useState("All");

  const AddToCart = (itemId) => {
    if (!cartItems[itemId]) setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    else setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    food_list,
    restaurants,
    cartItems,
    selectedRestaurant,
    setSelectedRestaurant,
    AddToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
