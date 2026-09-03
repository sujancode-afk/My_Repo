import React, { useRef } from "react";
const Example1=()=>{
    let usernameRef=useRef();
    let passwordRef=useRef();
    let emailRef=useRef();

    let handleSumit=(e)=>{
        e.preventDefault()
            console.log(usernameRef.current.value)
            console.log(passwordRef.current.value)
            console.log(emailRef.current.value)
            console.log("From Submitted")
    }

    
    return(
        <from onSubmit={handleSumit}>
        <fieldset> 
            <legend> Example 1</legend>
            <label htmlFor=" username"> useernamne:</label>
            <input type="text" ref={usernameRef} placeholder="Enter username"/>
    
            <br></br>
            
            <label htmlFor=" passworld"> passworld:</label>
            <input type="password" ref={passwordRef} placeholder="Enter passworld"/>
            <br></br>
            
            <label htmlFor="email">Email:</label>
            <input type="email" ref={emailRef} placeholder="enter Email"/>
            <br></br>
            <button>submit</button>
            <button>Reset</button>
        



            
            </fieldset>     
           </from>

    )
}

export default Example1