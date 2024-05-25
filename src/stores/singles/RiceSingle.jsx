import React from 'react'
import { riceData } from '../data/rice'
import { useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { useCart } from '../context/CartContext'

export const RiceSingle = () => {
 
  const {id} = useParams()
  const { addToCart } = useCart()
  const Product = riceData.find((item) => item.id === id)
  return (
    <div>
        <Navbar />
        <div className='ind-section'>
        <div className='ind-image'>
           <img src={Product.image} alt='' />
        </div>
        <div className='ind-details space'>
        <div className='ind-model space'>
            <h3>{Product.model}</h3>
        </div>
        <div className='ind-price space'>
            <h2>{Product.price}</h2>
        </div>
        <div className='ind-desc space'>
            <p>{Product.description}</p>
        </div>
        <button onClick={() => addToCart(Product)}>Add to cart</button>
        </div>
    </div>
    </div>
  )
}
