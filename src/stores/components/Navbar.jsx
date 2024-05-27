import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export const Navbar = () => {

  const { cartItems } = useCart()

  return (
    <div>
    <div className="navSection">
        <div className="title">
            <h2>E-Mart</h2>
        </div>
        <div className="search">
            <input type="text" placeholder="Search..." size="50" />
        </div>
        <div className="user">
            <div className="user-detail">SignIN/SignUp</div>
            <Link to='/cart'>
            <div className="cart">Cart
              <span>
                {cartItems.length}
              </span>
            </div>
            </Link>
        </div>
    </div>
    <div className='subMenu'>
       <ul>
          <Link to='/Rice'>
            <li>Rice</li>
          </Link>
          <Link>
            <li>Dal</li>
          </Link>
          <Link>
            <li>Spices</li>
          </Link>
          <Link>
            <li>Tea</li>
          </Link>
          <Link>
            <li>Dry Fruits</li>
          </Link>
          <Link>
            <li>Ghee</li>
          </Link>
          <Link>
            <li>Sugar</li>
          </Link>
          <Link>
            <li>Salt</li>
          </Link>
       </ul>
    </div>
    </div>
  )
}
