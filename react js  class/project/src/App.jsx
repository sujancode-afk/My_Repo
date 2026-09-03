import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import Navbar from './navbar';


const App = () => {
  return (
    
    <div>
       
       <BrowserRouter>
       <Navbar/>
       
        <Routes>
            
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/contactus' element={<ContactUs/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            
        </Routes>
        </BrowserRouter>
        
        
    </div>
  )
}

export default App