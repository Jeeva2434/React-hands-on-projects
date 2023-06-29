import React from 'react'

const List = ({people,setPeople}) => {
  return (
   <>
    {people.map((person,index)=>
        <div key={person.id} style={{display:'flex',alignItems:'center',gap:'15px',marginBottom: index===person.length-1?'0':'34px'}}>
            <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src={person.image} alt={`${person.name} profile`}/>
            <div>
                <h4 style={{margin:'0'}}>{person.name}</h4>
                <p style={{margin:'0'}}>{person.age}</p>
            </div>
        </div>
    )}
   </>
  )
}

export default List