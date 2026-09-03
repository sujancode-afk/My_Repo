import React from "react";
//import { useState } from 'react'
import HOC from './HOC'

 const WithCounter=(props)=>{
    console.log(props)

    return(
        <div>
            <button onClick={props.handleCount}>Clicked{props.count}times</button>
        </div>
    )
 }
 export default HOC(WithCounter)