import React from 'react'
import UserData from './UserData.json'
console.log(UserData)

const Task5 =()=>{
    return(
<section>
            {
                UserData.map((Data)=>{
                    console.log(Data)
                    return(
                        <div>
                            <p>{Data.id}</p>
                           <h1>{Data.login}</h1>
                           <img src={Data.avatar_url} alt="" height={400}  width={400}></img>
                        </div>
                    
                        
                    )
                })
            }
        </section>
    )
}
    
      

export default Task5