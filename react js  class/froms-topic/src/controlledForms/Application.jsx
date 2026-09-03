import  React,{ useState } from "react";

const Application = ()=>{
    let[fromData,setFormData]=useState({
    username:"",
    password:"",
    dob:"",
    age:"",
    email:"",
    })

    let handleChange = (e) => {
        setFormData({...fromData,[e.target.name]:e.target.value})
    }
         let handelSubmit=(e)=>{
            e.preventDefault();
            console.log("form submitted")
            console.log(fromData)
         }   

        return(
            <div>
                <from>
                    <fieldset>
                        <legend> Applcation from</legend>
                        <lable htmlfor="username" > username</lable>
                       <input name="username" id="username" placeholder="enter username"
                        type="text" onChange={handleChange}></input>
                        <br></br>
                        <lable htmlfor="password" > passworld</lable>
                       <input name="password" id="password" placeholder="enter passworld"
                        type="password" onChange={handleChange}></input>
                        <br></br>
                        <lable htmlfor="email" >email</lable>
                       <input name="email" id="email" placeholder="enter Email"
                        type="email" onChange={handleChange}></input>
                        <br></br>
                        <lable htmlfor="dob" > DOB</lable>
                       <input name="dob" id="dob" placeholder="enter dob "
                        type="date" onChange={handleChange}></input>
                        <br></br>
                        <lable htmlfor="age" > Age</lable>
                       <input name="age" id="age" placeholder="enter age"
                        type="number" onChange={handleChange}></input>
                        <br></br>
                        <button onClick={handelSubmit}>submit</button>
                        <br></br>
                        <button>Reset</button>

                        
                    </fieldset>
                </from>
            </div>
            )
        }
        export default Application
        
        
        