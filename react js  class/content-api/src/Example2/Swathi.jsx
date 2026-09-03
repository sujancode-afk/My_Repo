import { use, useContext } from "react";
import UserContext from './courseContext'
import CourseContext from "./courseContext";

const Swathi =()=>{
    let PhythonCourse=useContext(CourseContext)
    return(
        <div>
            <h1>Swathi</h1>
            <h1>Phython full stack</h1>
            {
                PhythonCourse.python.map((item)=>{
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
export default Swathi