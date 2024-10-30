import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../Assets/images/data';
import classes from './header.module.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { StoreContext } from '../../ContextProvider/StoreContext';

function Navbar() {
  const [menu, setMenu] = useState('');
  const [bgColor, setBgColor] = useState('transparent');
  const { totalItemsInCart } = useContext(StoreContext);

  const underHandler = (selectedMenu) => {
    setMenu((prev) => {
      return prev === selectedMenu ? '' : selectedMenu;
    });
  };


  useEffect(() => {
    const handleScroll = () => {
      setBgColor(window.scrollY > 910 ? '#333' : 'transparent'); // Changes color after 910px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={classes.fixed} style={{ backgroundColor: bgColor }}>
      <div className={classes.nav_container}>
        <div className={classes.nav_container_left}>
          <Link to="/">
            <img src={data.logo} alt="Logo" />
          </Link>
        </div>
        <div className={classes.nav_container_middle}>
          <ul>
            <li onClick={() => underHandler('home')} className={menu === 'home' ? classes.active : ''}>
              <Link to="/#home">Home</Link>
            </li>
            <li onClick={() => underHandler('about')} className={menu === 'about' ? classes.active : ''}>
              <Link to="/about">About Us</Link>
            </li>
            <li onClick={() => underHandler('services')} className={menu === 'services' ? classes.active : ''}>
              <Link to="/services">Services</Link>
            </li>
            <li onClick={() => underHandler('contact')} className={menu === 'contact' ? classes.active : ''}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={classes.banner_contents_right}>
          <div className={classes.right_inner}>
            <a onClick={() => underHandler('')} className={classes.media_icon} href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
            <a onClick={() => underHandler('')} className={classes.media_icon} href="https://www.instagram.com" target="_blank" rel="noreferrer" >
              <InstagramIcon />
            </a>
            <Link onClick={() => underHandler('')} className={classes.cart} to="./cart">
              <ShoppingBasketIcon />
              <li>{totalItemsInCart()}</li>
            </Link>
            <Link onClick={() => underHandler('')} to="/signin">
              <button className={classes.nav_btn}>Sign in</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
