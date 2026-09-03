import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    let userDetails = JSON.parse(localStorage.getItem('userDetails')) || {}
    console.log(userDetails[0])
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    console.log(isLoggedIn)
    let navigate=useNavigate()

    let handleLogout=()=>{
        localStorage.clear();
        
    }
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
                <NavLink to='/tickets'>Tickets</NavLink>


            </aside>
            <aside className="btns">

                {
                    isLoggedIn ? (
                        <>
                            <img src={userDetails[0].imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKfnnLmn7vTCtzvUYSX7UuAqr05-RxPVU0A&s"} height={50} width={50} style={{borderRadius:"50%"}} alt={userDetails[0].username} />
                            <NavLink ><button onClick={handleLogout}>Logout</button></NavLink>

                        </>
                    ) : (
                        <>
                            <NavLink to='/login'><button>Login</button></NavLink>
                            <NavLink to='/register'><button>Register</button></NavLink>
                        </>
                    )
                }

            </aside>
        </nav>
    )
}

export default Navbar