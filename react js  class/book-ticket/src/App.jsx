import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import Movies from './moviecomponent/Movies'
import Sports from './sportsComponent/Sports'
import Concet from './concertComponent/Concet'
import Parks from './parksComponent/Parks'
import Login from './authComponent/Login'
import Register from './authComponent/Register'

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
                    path: '/login',
                    element: <Login />
                },
                 {
                    path: '/register',
                    element: <Register />
                },

            ]
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App