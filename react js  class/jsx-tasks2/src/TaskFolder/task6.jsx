import React from 'react'
import UserData from './UserData.json'
console.log(UserData)


const Task6=()=>{

let randomData=UserData [Math.floor(Math.random() * UserData .length)];
    console.log(randomData)
    return (
    <>
        <h1>{randomData.id} </h1>
        <img src={randomData.avatar_url} height={400} width={400} alt=""/>
        <p>{randomData.login}</p>
        
    </>
)
}


export default Task6;