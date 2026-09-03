import React, { useRef, useState } from "react";
const Example2 = () => {
    let [result,setResult] = useState('')
    let num1Ref = useRef()
    let num2Ref = useRef()


    let addtion =(e)=> {
        e.preventDefault()
        let number1 = num1Ref.current.value
        let number2 = num2Ref.current.value



        console.log(number1, number2)
        let sum = parseInt(number1) + parseInt(number2);
        console.log(sum)
        console.log("addition")
        setResult('The result is ${sum}')
        
     }
     let subtrsction =(e)=>{
        e.preventDefault()
        let number1 = num1Ref.current.value
        let number2 = num2Ref.current.value

        console.log(number1, number2)
        let sum = parseInt(number1) - parseInt(number2);
        console.log(sum)
        console.log("subtrsction")
        setResult('the result is ${sum}')
        
     }

     let Division =(e)=>{
        e.preventDefault()
        let number1=num1Ref.current.value
        let number2=num2Ref.current.value

        console.log(number1,number2)
        let sum =parseInt(number1) % parseInt(number2);
        console.log(sum)
        console.log("division")
        setResult("  enter the divisin ${sums}")
        
     }

     let multipliation =(e)=>{
        e.preventDefault()
        let number1=num1Ref.current.value
        let number2=num2Ref.current.value

        console.log(number1,number2)
        let sum =parseInt(number1) * parseInt(number2);
        console.log(sum)
        console.log("multiplication")
        setResult('the result is ${sum}')
        
     }
    
    return(
        <from action="">
            <fieldset>
                <legend> Calculator</legend>
                <label htmlFor="num1"> Enter number1</label>
                <input type="number"ref={num1Ref}placeholder='Enter number 1'/>
                <br></br>
                <label htmlFor="num2"> Enter number2</label>
                <input type="number"ref={num2Ref}placeholder='Enter number 2'/>
                <br></br>
                <button onClick={addtion}>addition</button>
                <button onClick={subtrsction}> Subtrsction</button>
                <button onClick={Division}> Division</button>
                <button onClick={multipliation}> multiplication</button>
                <h1>{result}</h1>
                </fieldset>

        </from>
    )
}
export default Example2