import React from "react";
 import CommanFunctionality from './HOC'

  const Hemanth=(props)=>{
    console.log(props)
    let {money,handleMoney}=props
    return(
        <div>
            <h1>hementh is doneting {money}/-for Tejus</h1>
            <button onClick={handleMoney}>increment money</button>
        </div>
    )
  }
  export default CommanFunctionality(Hemanth,2)

