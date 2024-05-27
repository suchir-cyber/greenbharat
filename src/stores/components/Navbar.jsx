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
        <div class="search-container">
        <input type="text" class="search-input" placeholder="Search..." />
        <button class="search-button">Search</button>
        </div>
        {/* <div className="search">
            <input type="text" placeholder="Search..." size="50" />
        </div> */}
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


    <div class="horizontal-scroll-container">
    <div className='subMenu horizontal-content'>
       <ul>
          <Link to='/Rice'>
          <div className='content-item'><li>Rice</li></div>
          </Link>
          <Link>
          <div className='content-item'><li>Dal</li></div>
          </Link>
          <Link>
          <div className='content-item'><li>Spices</li></div>
          </Link>
          <Link>
          <div className='content-item'><li>Tea</li></div>
          </Link>
          <Link>
          <div className='content-item'><li>Dry Fruits</li></div>
          </Link>
          <Link>
          <div className='content-item'><li>Ghee</li></div>
          </Link>
          <Link>
          <div className='content-item'><li>Sugar</li></div>
          </Link>
          <Link>
          <div className='content-item'><li>Salt</li></div>
          </Link>
       </ul>
    </div>
    </div>
    </div>
  )
}
