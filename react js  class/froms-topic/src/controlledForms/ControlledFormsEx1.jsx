import  React,{ useState } from "react";

const ControlledFormsEx1 = ()=>{
    let[usernamne,SetUsername]=useState('')
    let [email,setEmail]=useState('')
    let [password,setPasswoprld]=useState('')

    let handleUserName = (e) => {
        console.log(e.target.value)
        SetUsername(e.target.value)


    }
    let handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    let handlepassworld=(e)=>{
        console.log(e. target.value)
        setPasswoprld(e.target.value)
}
let handleSumit=(e)=>{
    e.preventDefault()
    console.log(usernamne)
    console.log(email)
    console.log(password)
    console.log("from submited")
}
return(
    <div style={{hight:"600px",width:"200px",border:" 2px solid greens", backgroundColor:"lightblue",algain:"center",}}>
        <from onSubmit={handleSumit}>
        <fieldset> 
            <legend>Froms</legend>
            <label htmlFor=" username"> Useernamne:</label>
            <input onChange={handleUserName}
            type="text" id='username' placeholder="Useername"/>
            <br></br>

             
            
            <label htmlFor=" email"> Email:</label>
            <input onChange={handleEmail}
            type="email" id='email' placeholder="Enter Email"/>
            <br></br>

            <label htmlFor=" passworld"> Passworld:</label>
            <input onChange={handlepassworld}
             type="passworld" id='Passworld' placeholder="Passworld"/>
             <br></br>
            <button onClick={'handelsubmit'}>Submit</button>
            <button onClick={'handesubmit'}>cancle</button>
            </fieldset>
            

            </from>
            </div>
                
    )
}
export default ControlledFormsEx1 


