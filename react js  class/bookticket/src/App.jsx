import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/Homepage'
import Movies from './movieComponent/Movies'
import Sports from './sportsComponent/Sports'
import Concet from './concertComponent/Concet'
import Parks from './parksComponent/Parks'
import Login from './authComponent/Login'
import Register from './authComponent/Register'
import Details from './pages/Details'
import BookTickets from './pages/BookTickets'
import Tickets from './pages/Tickets'
import SimpleSlider from './pages/SimpleSlider';

const App = () => {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/movies',
                    element: <Movies />
                },
                {
                    path: '/sports',
                    element: <Sports />
                },
                {
                    path: '/concerts',
                    element: <Concet />
                },
                {
                    path: '/parks',
                    element: <Parks />
                },
                {
                    path: '/tickets',
                    element: <Tickets />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                 {
                    path: '/register',
                    element: <Register />
                },
                {
                    path:`/details/:type/:id`,
                    element:<Details/>
                }
                ,
                {
                    path:`/booking/:type/:id`,
                    element:<BookTickets/>
                }

            ]
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App