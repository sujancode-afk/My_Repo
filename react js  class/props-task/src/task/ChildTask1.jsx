import React from "react";

const ChildTask1 = (Props)=>{
    console.log(Props.randomFood)
    return(
        <>
        <h1>childTask1</h1>
        <h2>my fav food is {Props.randomFood.name}</h2>
        <img src={Props.randomFood.image}height={200} width={200} alt=""/>
        <p>{Props.randomFood.about}</p>
        </>
    )
}
export default ChildTask1;