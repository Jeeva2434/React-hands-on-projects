import React, { useState } from 'react';
import {reviews} from '../data';
import {FaGreaterThan} from 'react-icons/fa6';
import {FaLessThan} from 'react-icons/fa6';

const Review = () => {
 const [index,setIndex] = useState(0);
 const {name,job,image,text} = reviews[index];

 const checkNumber = (number) => {
  if(number < 0){
   return reviews.length-1;
  }
  if(number > reviews.length-1){
   return 0;
  }
  return number;
 }

 const prevBtn = () => {
  setIndex(index=>{
    let newIndex = index-1;
    console.log(newIndex,'prevBtn');
    return checkNumber(newIndex);
  })
 }

 const nextBtn = () => {
  setIndex(index => {
   let newIndex = index + 1;
   console.log(newIndex,'nextBtn');
   return checkNumber(newIndex);
  })
 }

 const randomSelection = ()=>{
  let randomNum = Math.floor(Math.random() * reviews.length);
  if(randomNum === index){
   randomNum += 1;
  }
  setIndex(checkNumber(randomNum));
 }

 return (
  <main>
   <section>
    <div>
     <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src={image} alt={`${name} ${job}`}/>
    </div>
    <div>
     <h3>{name}</h3>
     <h5>{job}</h5>
     <p>{text}</p>
    </div>
   </section>
   <div>
     <button onClick={prevBtn}><FaLessThan/></button>
     <button onClick={nextBtn}><FaGreaterThan/></button>
   </div>
   <button onClick={randomSelection}>Suprise me</button>
  </main>
 )
}

export default Review