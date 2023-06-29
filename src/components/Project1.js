import React,{useState} from 'react'
import data from '../data';
import List from './List'

const Project1 = () => {
    const [people,setPeople] = useState(data);
    return (
        <div>
            <section style={{display:'grid',placeItems:'center',marginTop:'15px'}}>
            <div style={{boxShadow:'1px 1px 2px 2px #fff,1px 1px 2px 2px #000',padding:'15px'}}>
            <h2>{people.length} person celebrating birthday today! </h2>
            <div className={`listContainer ${people.length === 0 ? 'listEmpty':''}`}>
                <List people={people} setPeople={setPeople}/> 
            </div>
            <button type='button' style={{width:'100%',padding:'10px',background:'pink',border:'none',color:'white',fontWeight:700,cursor:'pointer'}} 
            onClick={()=>{setPeople([])}}>Clear All</button>
            </div>
        </section>
        </div>
    )
}

export default Project1