import React, { useState } from 'react';
import { menu } from '../data';
import Category from './Category';
import Menu from './Menu';
const allCategories = ['all', ...new Set(menu.map(item => item.category))]

const Project5 = () => {
    const[categoryList,setCategoryList] = useState(allCategories);
    const[menuItems,setMenuItems] = useState(menu);

    const categorySelection = (category) => {
        console.log(category,' ',category === 'all');
        if(category === 'all'){
            setMenuItems(menu);
            return;
        }
        const newItems = menu.filter((item)=> item.category === category);
        setMenuItems(newItems);
    }

    return (
        <div>
            <h4>Menu items</h4>
            {categoryList.map((item,index) =>
                <Category key={index} item={item} categorySelection={categorySelection}/>
            )}
            {menuItems.map((item)=>
              <Menu key={item.id} item={item}/>
            )}
        </div>
    )
}

export default Project5