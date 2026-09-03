import React,{useState} from "react";
import CommanFunctionality from './HOC'

const Darshan=(props)=>{
    console.log(props)
    let {money,handleMoney}=props
    return(
        <div>
            <h1> Darshan is Donating {money}/- for tejas</h1>
            <button onClick={handleMoney}>increment money</button>
        </div>
    )
}
export default CommanFunctionality(Darshan,3)