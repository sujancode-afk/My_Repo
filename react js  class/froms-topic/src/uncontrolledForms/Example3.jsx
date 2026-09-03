import React, { useRef } from "react";
const Example3=()=>{
    let usernameRef=useRef();
    let passwordRef=useRef();
    let emailRef=useRef();
    let dobRef=useRef();
    let addressRef=useRef();
    


    let handleSumit=(e)=>{
        e.preventDefault()
            console.log(usernameRef.current.value)
            console.log(passwordRef.current.value)
            console.log(emailRef.current.value)
            console.log(ageRef.current.value)
            console.log(dobRef.current.value)
            console.log(addressRef.current.value)
            console.log("From Submitted")
    }

    
    return(
<div style={{height:"300px",width:"200px",border:"2ps solid gray",backgroundColor:"gray"}}>
        <from onSubmit={handleSumit}>
        <fieldset> 
            <legend> Example 3</legend>
            <label htmlFor=" username"> Usernamne:</label>
            <input type="text" ref={usernameRef} placeholder="Enter Username"/>
    
            <br></br>
             <label htmlFor="email">Email:</label>
            <input type="email" ref={emailRef} placeholder="Enter Email"/>
            <br></br>
            
             <label htmlFor=" passworld"> Passworld:</label>
            <input type="password" ref={passwordRef} placeholder="Enter passworld"/>
            <br></br>

             <label htmlFor=" date"> Date of bitrh:</label>
            <input type="dob" ref={dobRef} placeholder="Date"/>
            <br></br>

            <label htmlFor=" Address"> Address:</label>
            <textarea type="textarea" ref={addressRef} placeholder="Adderess" rows="3"/>
            <br></br>  

            <button >submit</button>
            <button >Reset</button>
            
            </fieldset>     
           </from>
           </div>

    )
}

export default Example3