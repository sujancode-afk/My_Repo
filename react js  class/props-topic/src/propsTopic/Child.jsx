import React, {Component} from "react";

/*export default class Child extends Component{
    render(){
        console.log(this.props)
        let {data,age,username}=this.props
        return(
            <div>
                <h1>i am a child Component</h1>
                <h2>{data}</h2>
                <p>i am {age} years old</p>
                <p>My name is{username}</p>
            </div>
        )
    }
}*/



/*import React, {Component} from 'react'

export default class Child extends Component{
    render(){
        console.log(this.props.student)
        let {stdId,stdName,stdAddress,stdPhNo}=this.props.student
        return(
            <div>
                <h1>I am Child Component</h1>
                <h1>My name is {stdName}</h1>
                <p>my address is{stdAddress}</p>
                <p>my contact no{stdPhNo}</p>
            </div>
        )
    }
}

import React,{Component} from 'react'

export default class Child extends Component{
    render(){
        console.log(this.props.userData)
        return(
            <div>
                <h1>Child Component</h1>
                <table>
                    <tr>
                        <th>StdID</th>
                        <th>StdName</th>
                        <th>StdAddress</th>
                        <th>StdPhonenumber</th>
                    </tr>
                    <tr>
                        {
                            this.props.userData.map((user)=>{
                                console.log(user)
                                return(
                                    <tr>
                                        <td>{user.StdID}</td>
                                        <td>{user.StdName}</td>
                                        <td>{user.StdAddress}</td>
                                        <td>{user.StdPhonenumber}</td>
                                    </tr>
                                )
                            })}
                    </tr>
                </table>
            </div>
        )
    }
}*/
    

/*props using FBC
import React from "react";
const Child=(props)=>{
    console.log(props)
    return(
        <div>
            <h1> Child</h1>
            <h2>{props.username}</h2>
            <p>{props.age}</p>
        </div>
    )
}
export default Child;
*/





/*import react from 'react'

const Child=(props)=>{
    console.log(props.employee)
    return(
        <div>
            <h1>chils</h1>
            <h2>{props.employee.empNmae}</h2>
            <h2>{props.employee.empDetails}</h2>
            <h2>{props.employee.empAddress}</h2>
        </div>
    )
}
export default  Child
*/




//error free
const Child = (props) => {
    console.log(props);
    return(
        <div >
            <table border={2} cellPadding={10} cellSpacing={10}>
                <tr>
                    <th>StdID</th>
                    <th>StdName</th>
                    <th>StdAddress</th>
                    <th>StdPhoneNumber</th>
                    <th>StdPhoto</th>
                </tr>
        {
                props.ud.map((user)=>{
                console.log(user)
                return (
                    <tr>
                        <td>{user.stdId}</td>
                        <td> {user.stdName}</td>
                        <td>{user.stdAddress}</td>
                        <td>{user.stdPhNumber}</td>
                        <td><img src = {user.img} height={50} width={50} ></img></td>
                    </tr>
                )
            })
    }
    
    
    </table>
        </div>
      
    )
    
}
export default Child;

    





