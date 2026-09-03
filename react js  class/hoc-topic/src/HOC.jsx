//import { useState } from "react";

import { useState } from "react";

function HOC (OrignalComponent){
   function newComponent (){
       let [count,setCount]=useState(0)
       let handleCount=()=>{
           setCount(count+1)
        }
        return<OrignalComponent handleCount={handleCount} count={count}/>

    }
    return newComponent;
}
export default HOC; 



// function CommanFunctionality (OrignalComponent,increment){
//     function newComponent(){
//         let [money,setMoney]=useState(10);
//         let handleMoney=()=>{

//             setMoney(money * increment)
//         }
//         return<OrignalComponent money={money} handleMoney={handleMoney}/>
//     }
//     return newComponent
// }
// export default CommanFunctionality;

