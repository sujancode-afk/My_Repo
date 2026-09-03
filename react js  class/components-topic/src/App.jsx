// import React from 'react'

import Footer from "./Footer"
import Navbar from "./Navbar"

// const App =() => {
//     return(
//         <div>
//             <h1>I am a App.jsx file</h1>
//         </div>
//     )
// }
// export default App

// import { Component } from "react";
// import Navbar from "./Footer"

// class App extends Component{
//     render(){
//         return(
//             <div>
//                 <Footer></Footer>
//             </div>
//         )
//     }
// } 
// export default App;

function App() {
    return (
        <div  style={{hight:"700px",width:"400px",border:"2px solid black",display:"flex", display:"fieex",
        flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px",
        borderRadius:"25px",background:"yellow",}}>
            <h1>  sample css</h1>
            <Navbar></Navbar>
        
        
        <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1pVwuZSs6a90KcMmmm8FIO3Vv_u_2SqLstA&s"></img>
            <Footer></Footer>
            
        </div>
    )
}
export default App;