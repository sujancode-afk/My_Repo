import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const Login = () => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let navigate=useNavigate();


  let handleEmail = (e) => {
    setEmail(e.target.value)
  }
  let handlePassword = (e) => {
    setPassword(e.target.value)
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    axios.get(`http://localhost:3000/users?email=${email}&password=${password}`)
      .then((res) => {
        console.log(res.data)
        if (res.data.length > 0) {
          toast.success("Login Successfull")
          localStorage.setItem('userDetails',JSON.stringify(res.data))
          localStorage.setItem('isLoggedIn',"true")
          setTimeout(()=>{
            navigate('/')
          },3000)
        } else {
          toast.error("Invalid UserDetails")
        }
      })
  }

  return (
    <form onSubmit={handleSubmit} >
      <ToastContainer />
      <fieldset>
        <legend>Login</legend>

        <label htmlFor="email">Enter Email:</label>
        <input type="email" placeholder='Enter Email' id='email' name='email' onChange={handleEmail} required />
        <br /><br />
        <label htmlFor="password">Enter Password:</label>
        <input type="password" placeholder='Enter Password' id='password' name='password' onChange={handlePassword} required />
        <br /><br />

        <button>Login</button>
        <button>Reset</button>

      </fieldset>
    </form>
  )
}

export default Login