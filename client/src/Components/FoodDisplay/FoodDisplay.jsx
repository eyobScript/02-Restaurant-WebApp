import React, { useContext } from 'react';
import classes from './foodDisplay.module.css';
import { StoreContext } from '../../ContextProvider/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import RestaurantSelector from './RestaurantSelector';

function FoodDisplay({ category }) {
    const { food_list, selectedRestaurant} = useContext(StoreContext);

    // Filter the food items based on selected restaurant and category
    const filteredFoods = food_list.filter(food => {
        const isInSelectedRestaurant = selectedRestaurant === 'All' || food.restaurantId === selectedRestaurant;
        const isInCategory = category === 'All' || food.category === category;
        return isInSelectedRestaurant && isInCategory;
    });

    return (
        <div className={classes.food_container}>
            <div className={classes.food_display}>
                <h2 >Top Dishes Near You</h2> 
                <RestaurantSelector />
                <div className={classes.food_display_list}>
                    {filteredFoods.length > 0 ? (
                        filteredFoods.map((food) => (
                            <FoodItem
                                key={food._id} 
                                id={food._id}
                                description={food.description}
                                name={food.name}
                                image={food.image}
                                price={food.price}
                            />
                        ))
                    ) : (
                        <p>No dishes available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FoodDisplay;
