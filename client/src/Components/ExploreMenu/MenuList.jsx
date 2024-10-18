import React, { useState } from 'react';
import ExploreMenu from './ExploreMenu';
import FoodDisplay from '../FoodDisplay/FoodDisplay';

function MenuList() {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
    </div>
  );
}

export default MenuList;
