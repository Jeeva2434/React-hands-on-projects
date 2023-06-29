import React from 'react'
import Tour from './Tour';

const Tours = ({tour,removeTour}) => {
  return (
    <div>
        {tour && tour.map((tour)=>
          <div key={tour.id}>
            <Tour {...tour} removeTour={removeTour}/>
          </div>
        )}
    </div>
  )
}

export default Tours