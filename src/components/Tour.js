import React, { useState } from 'react'

const Tour = ({id,image,info,name,price,removeTour}) => {
    const[readMore,setReadMore] = useState(false);
    return (
        <div>
            <img style={{width:'150px',height:'150px'}} src={image} alt={name}/>
            <h3>{name} <span style={{color:'blue'}}>${price}</span></h3>
            <div className = {`infoContainer ${readMore ? 'expanded' : ''}`}>
               {readMore ? info : `${info.substring(0,200)}...`}
               <button onClick={()=>setReadMore(!readMore)}>
                  {readMore ? 'show less' : 'read more'}
               </button>
            </div>
            <div>
                <button onClick={()=>removeTour(id)}>Not interested</button>
            </div>
        </div>
    )
}

export default Tour