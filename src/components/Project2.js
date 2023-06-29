import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const Project2 = () => {
    const[loading,setLoading] = useState(true);
    const[tour,setTour] = useState([]);
    const URL = 'https://course-api.com/react-tours-project'

    const fetchTour = async() => {
        setLoading(true);
        try{
            const response = await fetch(URL);
            if (!response.ok) {
                throw Error('Data not received');
            }
            const result = await response.json();
            console.log('Result... ',result);
            setTour(result);
            setLoading(false);
            console.log(tour.length,'tour length');
        }
        catch(err){
            console.log(err);
            setLoading(false);
        }
        finally{
            // setTimeout(() => {
            //     setLoading(false);
            // }, 1000);
        }
    }

    useEffect(()=>{
      (async()=>fetchTour())();
    },[]);

    const removeTour = (id) => {
        const newTours = tour.filter((tour)=>tour.id !== id);
        setTour(newTours);
    }   

    if(loading){
        return (
            <main>
                <Loading/>
            </main>
        )
    }
    if(tour.length === 0){
      return (
        <main>
            <h3>No result found</h3>
            <button onClick={fetchTour}>refresh</button>
        </main>
      )
    }
    return (
        <main>
            <Tours tour={tour} removeTour={removeTour}/>
        </main>
    )
};
export default Project2;