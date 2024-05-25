import React from 'react'
import './App.css'
import { HomePage } from './stores/pages/HomePage'
import { RicePage } from './stores/pages/RicePage'
import { Routes,Route } from 'react-router-dom'
import { RiceSingle } from './stores/singles/RiceSingle'
import { UserCart } from './stores/UserCart'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/Rice' element={<RicePage/>}/>

        {/* single page routing */}
        <Route path='/Rice/:id' element={<RiceSingle/>}/>

        {/* cart page */}
        <Route path='/cart' element={<UserCart/>}/>
      </Routes>
    </div>
  )
}

export default App