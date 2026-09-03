import React, { useState } from 'react'

const Application2 = () => {
    let[formData,setFormData]=useState({
        username:"",
        email:"",
        password:"",
        dob:"",
        age:"",
        gender:"",
        address:"",
        imageUrl:""
    })
    let[submittedData,setSubmittedData]=useState(null)
    let handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log("form submitted");
        console.log(formData);
        setSubmittedData(formData);
        
    }
    let handleReset=()=>{
        setFormData({
            username:"",
            email:"",
            password:"",
            dob:"",
            age:"",
            gender:"",
            address:"",
            imageUrl:""
        })
        setSubmittedData(null)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
            <legend> Example</legend>
            <label htmlFor="username"> Username</label>
            <input onChange={handleChange} type="text" id='username' placeholder='Enter the Username' name='username' value={formData.username}/>
            <br /><br />
            <label htmlFor="email"> Email</label>
            <input onChange={handleChange} type="email" id='email' placeholder='Enter the Email' name='email' value={formData.email}/>
            <br /><br />
            <label htmlFor="Password"> Password</label>
            <input onChange={handleChange} type="password" id='password' placeholder='Enter the Password' name='password' value={formData.password}/>
            <br /><br />
            <label htmlFor="date"> dob</label>
            <input onChange={handleChange} type="date" id='dob' placeholder='Enter the DOB' name='dob' value={formData.dob}/>
            <br /><br />
            <label htmlFor="Age"> age</label>
            <input onChange={handleChange} type="number" id='age' placeholder='Enter the Age' name='age' value={formData.age}/>
            <br /><br />
            <label> Gender</label>
            <input onChange={handleChange} type="radio" id='male' name='gender' value='male' checked={formData.gender === 'male'}/>
            <label htmlFor="male"> Male</label>
            <input onChange={handleChange} type="radio" id='female' name='gender' value='female' checked={formData.gender === 'female'}/>
            <label htmlFor="female"> Female</label>
            <br /><br />
            <label htmlFor="address"> Address</label>
            <textarea onChange={handleChange} id='address' placeholder='Enter the Address' name='address' value={formData.address}></textarea>
            <br /><br />
            <label htmlFor="imageUrl"> Image URL</label>
            <input onChange={handleChange} type="url" id='imageUrl' placeholder='Enter the Image URL' name='imageUrl' value={formData.imageUrl}/>
            <br /><br />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>

        </fieldset>
      </form>
      {submittedData && (
        <div>
            <h3>Submitted Details:</h3>
            <p><strong>Username:</strong> {submittedData.username}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Password:</strong> {submittedData.password}</p>
            <p><strong>DOB:</strong> {submittedData.dob}</p>
            <p><strong>Age:</strong> {submittedData.age}</p>
            <p><strong>Gender:</strong> {submittedData.gender}</p>
            <p><strong>Address:</strong> {submittedData.address}</p>
            {/* <p><strong>Image URL:</strong> {submittedData.imageUrl}</p> */}
            {submittedData.imageUrl && <img src={submittedData.imageUrl} alt="Submitted Image" style={{maxWidth: '200px'}} />}
        </div>
      )}
    </div>
  )
}

export default Application2;