import React, { useContext } from 'react';
import classes from './foodDisplay.module.css';
import { StoreContext } from '../../ContextProvider/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

function FoodDisplay({ category }) {
    const { food_list } = useContext(StoreContext);
    
    return (
        <div className={classes.food_container}>
        <div className={classes.food_display}>
            <h2>Top Dishes Near You</h2>
            <div className={classes.food_display_list}>
                {food_list.length > 0 ? (
                    food_list.map((food,index) => {
                        if(category === 'All' || category === food.category) 
                            return  <FoodItem 
                                        key={index}  
                                        id={food._id} 
                                        description={food.description} 
                                        name={food.name} 
                                        image={food.image} 
                                        price={food.price} 
                                    />
                       })
                ) : (
                    <p>No dishes available.</p> 
                )}
            </div>
        </div>
        </div>
    );
}

export default FoodDisplay;
