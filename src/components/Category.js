import React from 'react'

const Category = ({item,categorySelection}) => {
  return (
    <div>
        <li onClick={()=>categorySelection(item)}>{item}</li>  
    </div>
  )
}

export default Category