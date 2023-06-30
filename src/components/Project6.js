import React, { useEffect, useState } from 'react'

const Project6 = () => {

    const URL =  'https://course-api.com/react-tabs-project';

    const [loading,setLoading] = useState(true);
    const [jobs,setJobs] = useState([]);
    const [values,setValues] = useState(0);

    const fetchApi = async() => {
        setLoading(true);
        try{
            const response = await fetch(URL);
            const result = await response.json();
            console.log(result);
            setJobs(result)
            console.log(jobs[values]);
            setLoading(false);
        }
        catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchApi();
    },[])
 
    const job = jobs[values] || {}; 
    const {company,dates,duties,title} = job;

    if(loading){
        return (
            <main>
                Loading ...
            </main>
        )
    }

    return (
        <div>
            <h2>Experience</h2>
            <div>
                {jobs && jobs.map((item,index)=>
                  <button key={index} onClick={()=>setValues(index)} 
                   className={`job_company ${index===values && 'activeBtn'}`}
                  >{item.company}</button>
                )}
            </div>
            <div>
                <h2>{title}</h2>
                <p>{dates}</p>
                <p>{company}</p>
                <p>{duties && duties.map((duty,index)=>
                    <small key={index}>{duty}</small>
                )}</p>
            </div>
        </div>
    )
}

export default Project6