import React from "react";

const Task1 = () =>{
    let Student =[
        {
            studentId:1,
            studentName:'sujan',
            studentAge:"18",
            studentAddress:"mysuru",
        

        },
        {
            studentId:2,
            studentName:'sujan',
            studentAge:"18",
            studentAddress:"mysuru",

        },
        {

            studentId:3,
            studentName:'sujan',
            studentAge:"18",
            studentAddress:"mysuru",
        },
        {
            studentId:4,
            studentName:'sujan',
            studentAge:"18",
            studentAddress:"mysuru",
        },
        {
            studentId:5,
            studentName:'sujan',
            studentAge:"18",
            studentAddress:"mysuru",
        },
        {
            studentId:6,
            studentName:'sujan',
            studentAge:"18",
            studentAddress:"mysuru",
            
        }
    ]
    let randomdata = Student [Math.floor(Math.random()*Student.length)];
    console.log(randomdata);

    return(
        
       <div  style={{hight:"700px",width:"400px",border:"2px solid black",display:"flex", display:"fieex",
        flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px",
        borderRadius:"25px",background:"lightgreen",}}>
            <h1> css work is done</h1>
        <h1>studentId{randomdata.studentId}</h1>
        <h1> studentName:{randomdata.studentName}</h1>
        <h1>studentAge:{randomdata.studentAge}</h1>
        <h1>studentAddress:{randomdata.studentAddress}</h1>

        </div>
        
    )
}
export default Task1;