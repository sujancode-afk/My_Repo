import { useContext } from 'react'
import CourseContext from './courseContext'

const Dhanush=()=>{
    let javaCourse=useContext(CourseContext)
    return(
        <div>
            <h1>Dhanush </h1>
            <h2> java full Stack course Details</h2>
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
export default Dhanush;