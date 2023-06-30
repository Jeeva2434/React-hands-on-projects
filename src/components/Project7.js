import React, { useEffect, useState } from 'react'
import { people } from '../data'

const Project7 = () => {
    const [peoples,setPeople] = useState(people);
    const [index,setIndex] = useState(0);

    useEffect(()=>{
        if(index > peoples.length-1){
            setIndex(0);
        }
        if(index < 0){
            setIndex(peoples.length-1);
        }
        console.log('use eff')
    },[index,peoples]);

    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index+1);
        },5000);
        return () => {
            clearInterval(slider);
        }
    },[index]); 

    return (
        <div className='section-center'>
          {peoples && peoples.map((person,personIndex)=>{
            const {id,name,title,image,quote} = person;
            let position = 'nextSlide';
            if(index === personIndex){
                position = 'activeSlide';
            }
            if(personIndex === index-1 || (index===0 && personIndex===person.length-1)){
                position = 'lastSlide';
            }
            return (
                <article className={position} key={id}>
                    <h2>{name}</h2>
                    <h4>{title}</h4>
                    <img style={{width:'50px',height:'50px'}} src={image} alt={name}/>
                    <p>{quote}</p>
                </article>
            )
          })}
          <div style={{position:'relative',zIndex:'9999'}}>
            <button type='button' onClick={()=>{
                console.log('Previous button clicked');
                setIndex(index => index-1);
            }}>Previous</button>
            <button type='button' onClick={()=>setIndex(index => index+1)}>Next</button>
          </div>
        </div>
    )
}

export default Project7