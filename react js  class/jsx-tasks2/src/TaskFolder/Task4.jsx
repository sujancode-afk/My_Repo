

const Task4 =()=>{
    let purchaseAmount=1000000;
    let downPayment=15000000;
    let loanAmount= purchaseAmount-downPayment
    console.log(loanAmount,"Loan Amount")

    let timeDuration=5;
    let rateOfInterest=10.5;

    let totalInterest=(loanAmount*timeDuration*rateOfInterest)/100;
    console.log(totalInterest,"total Interest")

    let TotalAmount= loanAmount+totalInterest;
    console.log(TotalAmount,"Total Amount")

    let annualEMI=TotalAmount/timeDuration;
    console.log (annualEMI,"Annual EMI")

    let monthlyEMI=annualEMI/12
    console.log(monthlyEMI,"Monthly")

     return(
     <h1> Task 4 </h1>   
     )
}
export default Task4;