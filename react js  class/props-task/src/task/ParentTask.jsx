import ChildTask1 from "./ChildTask1"

const ParentTask1 =()=>{
    let foods=[
        {
            foodId:1,
            foodNmae:"biarany",
            foodImage:" ",
            foodDiscription:"food basic ned but am leaving to heet more food "



        },
         {
            foodId:2,
            foodNmae:"pavbaji",
            foodImage:" https://www.freepik.com/photos/food",
            foodDiscription:" birany is indenes faverat food"


        },
         {
            foodId:3,
            foodNmae:"chitranna",
            foodImage:"https://www.freepik.com/photos/food",
            foodDiscription:" birany is indenes faverat food"


        },
         {
            foodId:4,
            foodNmae:"dosa",
            foodImage:"https://www.freepik.com/photos/food",
            foodDiscription:" birany is indenes faverat food"


        },
         {
            foodId:5,
            foodNmae:"samosa",
            foodImage:"https://www.freepik.com/photos/food",
            foodDiscription:" birany is indenes faverat food"


        },

    ]
    let randomFood = foods[Math.floor(Math.random()*foods.length)]
    console.log(randomFood)
    return(
        <>
        <h1>ParentTask1</h1>
        <ChildTask1 randomFood={randomFood}/>

        </>
    )

}
export default ParentTask1;