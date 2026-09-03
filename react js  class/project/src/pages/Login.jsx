import React from 'react'

const Login = () => {
  return (
     <form>
        <fieldset>
            <legend>Login</legend>
            <label htmlFor="username">enter username:</label>
            <input type="text" id="username" placeholder='enter username'/>
            <br/><br/>

            <label htmlFor="password">enter password:</label>
            <input type="password"  id='password' placeholder='enter password' />
            <br/><br/>
            <button>submit</button>
            <button>Reset</button>
        </fieldset>
    </form>
  )
}

export default Login