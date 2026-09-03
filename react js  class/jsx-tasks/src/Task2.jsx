const task2 =()=>{
    let data=[
        {
            movieId:1,
            movieName:puspa,
            movieImage:"https://www.moneycontrol.com/entertainment/late-actor-puneeth-rajkumar-s-debut-film-appu-to-re-release-in-honour-of-his-50th-birth-anniversary-article-12951155.html",
            moviediscription:"i am mad "
        },
        {
            movieId:2,
            movieName:appu,
            movieImage:"https://www.moneycontrol.com/entertainment/late-actor-puneeth-rajkumar-s-debut-film-appu-to-re-release-in-honour-of-his-50th-birth-anniversary-article-12951155.html",
            moviediscription:"nasklcbnifewh bniohweofh"
        },
        {
            movieId:1,
            movieName:papu,
            movieImage:"https://www.moneycontrol.com/entertainment/late-actor-puneeth-rajkumar-s-debut-film-appu-to-re-release-in-honour-of-his-50th-birth-anniversary-article-12951155.html",
            moviediscription:"bjwekbkwbvb"
        },
        {
            movieId:1,
            movieName:napu,
            movieImage:"https://www.moneycontrol.com/entertainment/late-actor-puneeth-rajkumar-s-debut-film-appu-to-re-release-in-honour-of-his-50th-birth-anniversary-article-12951155.html",
            moviediscription:"cfgvhbj"
        },
    ]
    return(
        <>
        <h1>{randomData.movie}</h1>
        <img src ={randomData.movieImage} hight={200} width={200} alt=""/>
        <p> {randomData.movieDiscription} </p> 
        </>    

    )
}
export default task2;