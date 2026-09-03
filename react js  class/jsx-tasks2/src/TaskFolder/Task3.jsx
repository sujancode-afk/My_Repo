const Task3=()=>{
    let principlAmount = prompt(" enter principal Amount");
    let rateofintrust = prompt(" enter rate of intrust");
    let timeDuration = prompt(" enter the time duration [in year]");
    let simpleIntrust = (principlAmount* rateofintrust*timeDuration)/100
    console.log(simpleIntrust)
    return(
        <>
        <h1> calculation of simpleIntrust</h1>
        <h3> principlAmount:{principlAmount}</h3>
        <h3>Rate of Interest:${rateofintrust}</h3>
        <h3> time duration:{timeDuration}</h3>
        <h3>Simple interest: {simpleIntrust}</h3>
        </>
    )
}
export default Task3;

