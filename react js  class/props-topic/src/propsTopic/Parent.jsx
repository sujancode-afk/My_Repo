import React, { Component } from "react";
 import Child from "./Child";
 import usersData from "./usersdata.json"
/*class Parent extends Component{
    render(){
         let data="Sujan"
         console.log(data)
         let age=34;
         console.log(age)

         return(
             <>
             <h1>I Am a Parent</h1>
             <h3>{data}</h3>
             <hr />
             <Child data={data}
            age={age}
          username="Sujan"/>
             </>
         );
     }
 }
 export default Parent;



// /*export default class Parent extends Component{
//     render(){
//         let student={
//             stdId:101,
//             stdName:"kruthika",
//             stdAddress:"Mysore",
//             stdPhNo:985573847
//         }
//         return(
//             <div>
//                 <h1>I am kruthika</h1>
//                 <hr/>
//                 <Child student={student}/>
//             </div>
//         )
//     }
// }

// import React, {Component} from 'react'
// import userData from './userData.json'
// import Child from './Child'
// console.log(userData)

// export default class Parent extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Parent Component</h1>

//                 <hr/>
//                 <Child userData={userData}/>
//             </div>
//         )
//     }

// }*/

 //Props using FBC
 /*const Parent=()=>{
     return(
         <>
         <h1>Parent Component</h1>
         <hr />
         <Child username='sujan' age={19}/>
         </>
     )
}
export default Parent;



// // passing object os on parent

// //import react from "react";

// /*const Parent=()=>{
//     let employee={
//         emId:101,
//         empName:"sujan",
//         empDesigination:"developer",
//         empAddress:"mysure",
//     }
//     return(
//         <>
//         <h1> parent</h1>
//         <hr />
//         <child employee={employee}/>

//         </>
//     )

// }
// export default Parent
*/



//error free
const Parent = () => {
    let ud = usersData;
    return(
        <div  id="container">
            <h1>Parent Component</h1>
            <hr />
            <Child ud = {ud}/>
        </div>
    )
}
export default Parent;



