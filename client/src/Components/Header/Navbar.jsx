import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { data } from '../../Assets/images/data';
import classes from './header.module.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Navbar() {
  const [menu, setMenu] = useState('menu');

  const underHandler = (selectedMenu) => {
    setMenu(selectedMenu);
  };

  return (
    <div className={classes.nav_container}>
      <div className={classes.nav_container_left}>
        {/* Use Link for internal navigation */}
        <Link to="/">
          <img src={data.logo} alt="Logo" />
        </Link>
      </div>

      <div className={classes.nav_container_middle}>
        <ul>
          <li
            onClick={() => underHandler('home')}
            className={menu === 'home' ? classes.active : ''}
          >
            <Link to="/#home">Home</Link>
          </li>
          <li
            onClick={() => underHandler('about')}
            className={menu === 'about' ? classes.active : ''}
          >
            <Link to="/#about">About Us</Link>
          </li>
          <li
            onClick={() => underHandler('services')}
            className={menu === 'services' ? classes.active : ''}
          >
            <Link to="/#services">Services</Link>
          </li>
          <li
            onClick={() => underHandler('menu')}
            className={menu === 'menu' ? classes.active : ''}
          >
            <Link to="/#menu">Menu</Link>
          </li>
          <li
            onClick={() => underHandler('contact')}
            className={menu === 'contact' ? classes.active : ''}
          >
            <Link to="/#contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className={classes.banner_contents_right}>
        <div className={classes.right_inner}>
          {/* For external links, use <a> with valid URLs */}
          <a className={classes.media_icon} href="https://www.facebook.com" target="_blank" >
            <FacebookIcon />
          </a>
          <a className={classes.media_icon} href="https://www.instagram.com" target="_blank">
            <InstagramIcon />
          </a>
          <Link className={classes.cart} to="/cart">
            <ShoppingBasketIcon />
            <li>{0}</li>
          </Link>
          <Link to="/signin">
            <button className={classes.nav_btn}>Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
