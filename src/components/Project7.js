import React, { useEffect, useState } from 'react'
import { people } from '../data'

const Project7 = () => {
    const [people,setPeople] = useState(people);
    const [index,setIndex] = useState(0);

    useEffect(()=>{},[index]);

    return (
        <div>
          {people && people.map((person,personIndex)=>{
            const {id,name,title,image,quote} = person;
            let position = 'nextSlide';
            if(index === personIndex){
                position = 'absolute';
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
          <button onClick={()=>setIndex(index-1)}>Previous</button>
          <button onClick={()=>setIndex(index+1)}>Next</button>
        </div>
    )
}

export default Project7