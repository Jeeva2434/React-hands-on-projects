import React from 'react'

const Menu = ({item}) => {
  return (
    <div>
        <img style={{width:'50px',height:'50px'}} src={item.img} alt={item.title}/>
        <div>
            <span>{item.title}</span>
            <span>{item.price}</span>
        </div>
        <div>{item.desc}</div>
    </div>
  )
}

export default Menu