import React from 'react';
import { data } from '../../Assets/images/data';
import classes from './header.module.css';
import Navbar from './Navbar'; // Import the Navbar component

function Banner(props) {
  return (
    <>
      <div
        className={classes.banner}
        style={{
          height: '100vh',
          backgroundSize: 'cover',
          backgroundImage: `url(${data.banner})`,
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Use Navbar component */}
        <Navbar />

        <div className={classes.banner_contents}>
          <div className={classes.grid_banner}>
            <h1 className={classes.title}>Our Restaurant</h1>
            <p className={classes.animated_sentence}>
              "Welcome to Fidel Restaurant,
              where delicious flavors meet joyful gatherings,
              creating unforgettable moments with every bite!"
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
