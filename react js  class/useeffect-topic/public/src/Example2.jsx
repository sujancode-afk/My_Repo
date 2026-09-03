import axios from "axios";
import React, { useEffect, useState } from "react";


const Example2=()=>{
    let [user,setUser]=useState([])

    useEffect(()=>{
        axios.get('https://api.github.com/users')
        .then((res)=>{
            // console.log(res.data)
            let userData=res.data;
            console.log(userData)
            setUser(userData)
            // userData.map((user)=>{
            //     console.log(user)
            // })

        })
    },[])
   
    
 

    return(
        <div>
            {
                user.map((item)=>{
                    console.log(item)
                    return(
                        <>
                        <h1>{item.id}</h1>
                        <h1>{item.login}</h1>
                        <img src={item.avatar_url} height={200} width={200} style={{borderRadius:"10%"}}/>
                        </>
                    )
                })
            }
            
        </div>
    )
}
export default Example2