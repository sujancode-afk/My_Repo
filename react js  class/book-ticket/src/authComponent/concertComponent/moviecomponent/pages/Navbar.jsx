import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbarContainer">
            <aside className="logo">
                <h2>Book Tickets</h2>
            </aside>
            <aside className="menu">
                <NavLink to='/'>HomePage</NavLink>
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/sports">Sports</NavLink>
                <NavLink to="/concerts">Concerts</NavLink>
                <NavLink to='/parks'>Parks</NavLink>

            </aside>
            <aside className="btns">
                <NavLink to='/login'><button>Login</button></NavLink>
                <NavLink to='/register'><button>Register</button></NavLink>
            </aside>
        </nav>
    )
}

export default Navbar