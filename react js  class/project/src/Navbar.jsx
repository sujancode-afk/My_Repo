import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbarContainer">
        
        <aside className="logoBlock">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ghVUKTYxHRd3Lch3myeD-nSyhIOx3BQENg&s"  />
        </aside>
        <aside className="menuBlock">
            <NavLink to='/'>HomePage</NavLink>
            <NavLink to='/contactus'>ContactUs</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </aside>
    </nav>
    
  )
}

export default Navbar