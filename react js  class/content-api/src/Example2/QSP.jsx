import React from "react";
import java from './java'
import CourseContext from  './courseContext'
import Python from './python'

const QSP =()=>{
    let course={
        java:["java","webTech","react js","SQL","J2EE"],
        python:["Python","webTech","react js","SQL","Django"],
    }
    return(
        <div>
            <CourseContext.provider value={course}>
                <python/>
                <java/>
            </CourseContext.provider>
        </div>
    )
}
export default QSP;