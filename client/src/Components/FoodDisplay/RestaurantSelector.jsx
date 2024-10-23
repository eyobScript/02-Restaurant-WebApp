import React, { useContext } from 'react';
import classes from './foodDisplay.module.css';
import { StoreContext } from '../../ContextProvider/StoreContext';

function RestaurantSelector() {
  const { restaurants, setSelectedRestaurant } = useContext(StoreContext);

  const handleSelect = (event) => {
    setSelectedRestaurant(event.target.value);
    
  };

  return (
    <div>
      <h3>Select a Restaurant</h3>
      <select className={classes.restaurant_option} onChange={handleSelect}>
        <option  value="All">All Restaurants</option>
        {restaurants.map((restaurant,index) => (
          <option key={index
          } value={restaurant.id}>
            {restaurant.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RestaurantSelector;

