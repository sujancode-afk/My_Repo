import React, { useState } from "react";

const Example2=()=>{
    
    let [count,setcount]=useState(0);
    
    let increment=()=>{
        setcount(count = count+1);
    }
    let decrement=()=>{
        setcount(count = count-1);
    }
    let reset=()=>{
        setcount(0);
    }
    return(
        <div className="body">
        <h1> Number {count}</h1>
        <button onClick={increment}> Incrment</button>
        <button onClick={decrement}> decrment</button>
        <button onClick={reset}> Reset</button>

        </div>
    )
}

export default Example2;