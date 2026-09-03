 import React, { useState } from "react";

 class Example3 extends Component{
    
     state={
         count:0
     }
     increment=()=>{
         this.setState({count:this.state.count+1})
     }
     decrement=()=>{
         this.setState({count:this.state.count-1})
  }
reset=()=>{
     this.setState({count:0})
  }

     render(){         
             return(
             <div id="container">
                 {this.state.count}
                 <br />
                 <button onClick={this.increment}>Increment</button>
                 <button onClick={this.decrement} >Decrement</button>
                 <button onClick={this.reset}>Reset</button>
             </div>
         )
     }
 }
 export default Example3;


// Using Functional Component




