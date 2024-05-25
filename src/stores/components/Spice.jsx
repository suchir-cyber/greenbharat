import React from 'react'
import { spiceData } from '../data/spices'

export const Spice = () => {

  const firstFourImages = spiceData.slice(0,4)

  return (
    <div>
       <div className='proTitle'><h2>Spices</h2></div>
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
