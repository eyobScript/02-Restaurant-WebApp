import React, { useContext } from 'react';
import classes from './cart.module.css';
import { StoreContext } from '../../ContextProvider/StoreContext';
import FoodItem from '../../Components/FoodItem/FoodItem';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {
  const { cartItems, food_list, calculateTotal, removeFromCart } = useContext(StoreContext);
  const cartDetails = food_list.filter(food => cartItems[food._id]);

  return (
    <>
      <div className={classes.navbar}></div>

      <section className={classes.cart_container}>
        <div className={classes.cart_inner}>
          <div className={classes.grid_item}>
            <h2>Your Cart</h2>
            <hr className={classes.hr}/>
            <div className={classes.cart_items}>
              {cartDetails.length > 0 ? (
                cartDetails.map(food => (
                  <div key={food._id} className={classes.cart_item}>
                    <FoodItem
                      id={food._id}
                      name={food.name}
                      price={food.price}
                      description={food.description}
                      image={food.image}
                    />
                    <div className={classes.vl}></div> 
                    <div className={classes.cart_item_quantity}>
                      <p>Quantity: {cartItems[food._id]}</p>
                      <Button
                        color="error"
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={() => removeFromCart(food._id, "cartName")}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className={classes.empty_cart}>Oops your cart is empty.</p>
              )}
            </div>
          </div>
          <div className={classes.cart_total}>
            <h3>Total: ETB {calculateTotal()}</h3>
            <hr />
            <Button className={classes.payment_btn} variant="contained" color="primary">
              payment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
