import React from 'react'
import { dalData } from '../data/dal'

export const Dal = () => {

  const firstFourImages = dalData.slice(0,4)

  return (
    <div>
       <div className='proTitle'><h2>Dal</h2></div>
       <div className='proSection'>
       {
        firstFourImages.map((item) =>{
            return(
                <div className='imgBox'>
                   <img className='proImage' src={item.image}   alt=''   />
                </div>
            )
        })
       }
       </div>
    </div>
    
  )
}
