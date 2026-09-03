
//import React from 'react'
import React, {useState} from 'react'
import HOC from './HOC'

const WithHover=(props)=>{
    console.log(props)
    
    return(
            <div>
                <h1 onMouseOver={props.handleCount}> Hoverd {props .count}times</h1>
            
                
            </div>
        )
     }
     export default HOC(WithHover)
