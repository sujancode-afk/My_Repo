import React from "react";
import React,{useContext} from './courseContext'
import CourseContext from "./courseContext";

const Pavitrea=()=>{
    let javaCourse=useContext(CourseContext)
    console.log(javaCourse.java)
    return(
        <div>
            <h1> Pavitra </h1>
            <h2> java full stack detaikes</h2>
            {
                javaCourse.java.map((item)=>{
                    console.log(item)
                    return(
                        <li>
                            {item}
                        </li>
                    )
                })
            }
        </div>
    )
}
export default Pavitrea