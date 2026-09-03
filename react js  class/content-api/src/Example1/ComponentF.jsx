import React from "react";

//const ComponentF =(props)=>{
  //  return(
    //    <div>
      //      <h1>ComponentF</h1>
        //    <h1> My name is{props.username}</h1>
        //</div>
    //)
//}
//export default ComponentF

import React, { useContext } from 'react'
import USerContext from './userContext'


const ComponentF=()=>{
    let userName=useContext(UserContext);
    console.log(userName)
    return(
        <div>
            <h1> Componnet F</h1>
            <h2> My name is {userName}</h2>
        </div>
    )
}
export default ComponentF





