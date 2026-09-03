
import React ,{useContext} from'react'
import CourseContext from './courseContext'



const vinay =()=>{
    let PhythonCourse=useContext(CourseContext)
     return(
        <div>
            <h1>Vinay</h1>
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
export default vinay
