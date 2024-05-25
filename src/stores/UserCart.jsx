import React from 'react'
import { useCart } from './context/CartContext'

export const UserCart = () => {

  const { cartItems } = useCart()

  return (
    <div>
        {cartItems.map((item) => {
            return(
                <div className='cart-section'>
                    <div className='cart-img'>
                        <img src={item.image} alt='' />
                    </div>
                    <div className='cart-details'>
                        <h3>{item.product}</h3>
                        <h2>{item.price}</h2>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
