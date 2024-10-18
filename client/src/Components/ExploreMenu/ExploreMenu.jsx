import React from 'react';
import classes from './exploreMenu.module.css'; // Correct import
import { menu_list } from '../../Assets/frontend_assets/assets';

function ExploreMenu({ category, setCategory }) {
  return (
    <div className={classes.explore_menu}>
      <div className={classes.center_menu_header}>
        <div className={classes.explore_header}>
          <h1>Explore our menu.</h1>
          <p className={classes.explore_menu_text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint at unde ullam saepe iusto ex atque
          </p>
        </div>
      </div>
      <div className={classes.explore_menu_list}>
        {Array.isArray(menu_list) && menu_list.map((item) => (
          <div 
            onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)} 
            key={item.menu_name} 
            className={classes.explore_menu_list_item}
          >
            <img 
              className={`${category === item.menu_name ? classes.active : ''}`} 
              src={item.menu_image} 
              alt={item.menu_name} 
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
