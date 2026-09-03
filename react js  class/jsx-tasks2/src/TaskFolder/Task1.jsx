const Task1=()=>{
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
    return(
        <section>
            {
                data.map((movieData)=>{
                    console.log(movieData)
                    return(
                        <div>
                            <p>{MovieData.id}</p>
                            <h1>{MovieData.movieName}</h1>
                        </div>
                    )
                })
            }
        </section>
    )   

}
export default Task1;