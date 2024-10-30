import { createContext, useState } from 'react';
import { food_list, restaurants } from '../Assets/frontend_assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [selectedRestaurant, setSelectedRestaurant] = useState("All");
  const AddToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId, name) => {
    setCartItems((prev) => {
      const itemCount = prev[itemId];
      
      if (name === "cartName" || itemCount <= 1) {
        // Completely remove the item
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      
      // Decrease the item count
      return { ...prev, [itemId]: itemCount - 1 };
    });
  };
  const calculateTotal = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const foodItem = food_list.find(food => food._id === itemId);
      if (foodItem) {
        return total + foodItem.price * cartItems[itemId];
      }
      return total;
    }, 0);
  };
  const totalItemsInCart = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };
  const contextValue = {
    food_list,
    restaurants,
    cartItems,
    selectedRestaurant,
    setSelectedRestaurant,
    AddToCart,
    removeFromCart,
    calculateTotal,
    totalItemsInCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
