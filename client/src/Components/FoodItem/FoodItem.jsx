import React, { useContext } from 'react';
import classes from './foodItem.module.css';
import { assets } from '../../Assets/frontend_assets/assets';
import { StoreContext } from '../../ContextProvider/StoreContext';

function FoodItem({ id, name, price, description, image }) {
    const {cartItems, AddToCart, removeFromCart} = useContext(StoreContext)
    return (
    
        
        <div className={classes.food_item}> 
            <div className={classes.food_item_img_container}>
                <img className={classes.food_item_image} src={image} alt={name} />
                {
                    !cartItems[id]
                    ?<img className={classes.add} onClick={()=>AddToCart(id)} src={assets.add_icon_white} />
                    :<div className={classes.food_item_counter}> 
                    <img onClick={() =>removeFromCart(id)} src={assets.remove_icon_red} alt="remove icon" />
                    <p>{cartItems[id]}</p>
                    <img onClick={() =>AddToCart(id)} src={assets.add_icon_green} alt="add icon" />
                    </div>

                }
            </div>
            <div className={classes.food_item_info}>
                <div className={classes.food_item_name_rating}>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating stars" />
                </div>
                <p className={classes.food_item_desc}>
                    {description}
                </p>
                <p className={classes.food_item_price}>ETB {price}</p>
            </div>
        </div>
    );
}

export default FoodItem;
