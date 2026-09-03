import React, {useState,useEffect} from "react";


 const Example1=()=>{
        let [count1,setCount1]=useState(0)
        let [count2,setCount2]=useState(0)
    
        let handleCount1=()=>{
            setCount1(count1+1)
        }
    
        let handleCount2=()=>{
            setCount2(count2+1)
        }
    
        useEffect(()=>{
            console.log("my name is deepika")
        },[count1])
    
    
        return(
            <div>
                <h1>Count1</h1>
                <h1>{count1}</h1>
                
                <button onClick={handleCount1}>change data</button>
                <hr/>
                <h1>Count2</h1>
                <h1>{count2}</h1>
    
    
                <button onClick={handleCount2}>change data</button>
    
            </div>
        )
    }
    export default Example1