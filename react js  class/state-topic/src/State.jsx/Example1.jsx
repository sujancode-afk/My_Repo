//! intializion state using constent members
import React,{Component}from "react";

 export default class Example1 extends Component{
    constructor(){
        super();
        this.state={
            username:"sujan",
            age:25,
            address:"RR nagar"
        }
    }
    render(){
        return(
            <div>
                <h1>{this. state.username}</h1>
                <h1>{this. state.age}</h1>
                <h1>{this .state.address}</h1>
                
            </div>
        )
    }
}
export default Example1;    
    


   