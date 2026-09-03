import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const Register = () => {
    let navigate=useNavigate()
    let [userData,setUserData]=useState({
        username:"",
        email:"",
        password:"",
        phnum:"",
        imageUrl:"",
        gender:""
    })
    let handleChange=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log("FormSubmitted");
        console.log(userData)
        axios.post('http://localhost:3000/users',userData)
        toast.success("User Registered Successfully")

        setTimeout(()=>{
            navigate('/login')
        },3000)

    }
    return (
        <form onSubmit={handleSubmit}> 
        <ToastContainer/>   
            <fieldset>
                <legend>Register</legend>
                <label htmlFor="username">Enter Username:</label>
                <input type="text" placeholder='Enter Username' id='username' name='username' onChange={handleChange} />
                <br /><br />
                <label htmlFor="email">Enter Email:</label>
                <input type="email" placeholder='Enter Email' id='email' name='email' onChange={handleChange} />
                <br /><br />
                <label htmlFor="password">Enter Password:</label>
                <input type="password" placeholder='Enter Password' id='password' name='password' onChange={handleChange} />
                <br /><br />
                <label htmlFor="phnum">Enter Phone Number:</label>
                <input type="tel" placeholder='Enter Phone Number' id='phnum' name='phnum' onChange={handleChange} />
                <br /><br />
                <label htmlFor="imageUrl">Enter Iamge URL:</label>
                <input type="url" placeholder='Enter image url' id='imageUrl' name='imageUrl' onChange={handleChange} />
                <br /><br />
                <label htmlFor="gender">Select Gender:</label>
                <input type="radio" name='gender' onChange={handleChange} value='male' />Male
                <input type="radio" name='gender' onChange={handleChange} value='female' />Female
                <input type="radio" name='gender' onChange={handleChange} value='others' />Others
                <br /><br />
                <button>Register</button>
                <button>Reset</button>

            </fieldset>
        </form>
    )
}

export default Register