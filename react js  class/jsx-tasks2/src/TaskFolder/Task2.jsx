const Task2=()=>{
    let Movies=[
        {
            id:1,
            movieName:"toxic",
            movieDescription:"topmoste Here are some of the popular and highly anticipated movies you can watch or look forward to", 
            movieImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXW59mcXvN6mSp0iJDEdy0kR-ZuNo3dBx4Q&salt/>"
        },
        {
            id:2,
            movieName:"akash",
            movieDescription:"topmoste Here are some of the popular and highly anticipated movies you can watch or look forward to ",
            movieImage:"https://gaana.com/album/akash-original-motion-picture-soundtrack"
        },
        {
            id:3,
            movieName:"mark",
            movieDescription:"topmoste Here are some of the popular and highly anticipated movies you can watch or look forward to",
            movieImage:"https://www.thehindu.com/entertainment/movies/mark-movie-review-kichcha-sudeep-kiccha-sudeep-vijay-kartikeyaa-thriller-just-about-passes-the-test/article70436339.ece"
        },
    
        {
            id:4,
            movieName:"durandar",
            movieDescription:"topmoste Here are some of the popular and highly anticipated movies you can watch or look forward to",
            movieImage:"https://en.wikipedia.org/wiki/Dhurandhar"
        }

    ]
let randomData = Movies[Math.floor(Math.random()*Movies.length)];
console.log(randomData)
return(
    <>
    <h1>{randomData . movieName}</h1>
    <img src={randomData.movieImage}height={200} width={200} alt=" "/>
    <p>{randomData.movieDescription}r</p>
    </>
)
}
export default Task2;