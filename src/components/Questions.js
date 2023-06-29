import React,{useState} from 'react'
import {FaPlus} from 'react-icons/fa6';
import {FaMinus} from 'react-icons/fa6';

const Questions = ({title,info}) => {
 const[show,setShow] = useState(false);

  return (
   <article>
     <div>
      <div style={{display:'flex',alignItems:'center',columnGap:'30px'}}>
       <h4>{title}</h4>
       <div onClick={()=>setShow(!show)}>{show ? <FaMinus/> : <FaPlus/> }</div>
      </div>
      <div>{show && info}</div>
     </div>
   </article>
  )
}

export default Questions