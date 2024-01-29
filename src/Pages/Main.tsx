import React from 'react'
import About from './About'
import Home from './Home'
import Find from './Find'
import {Routes,Route,NavLink} from "react-router-dom"

function Main() {
  return (
    <div>
     <div>
      <NavLink to="/"><button className='px-12 py-2 bg-yellow-400 border-2 font-bold'>Page1</button></NavLink>
      <NavLink to="About"><button className='px-12 py-2 bg-yellow-400 border-2 font-bold'>Page2</button></NavLink>
      <NavLink to="Find"><button className='px-12 py-2 bg-yellow-400 border-2 font-bold'>Page3</button></NavLink>
     </div>

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='About' element={<About />}/>
      <Route path='Find' element={<Find />}/>
    </Routes>

          
    </div>
  )
}

export default Main
