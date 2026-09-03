import React from 'react'

const Register = () => {
  return (
    <form>
        <fieldset>
            <legend>Register</legend>
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

export default Register