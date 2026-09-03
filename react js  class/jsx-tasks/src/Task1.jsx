const Task1 =()=>{
    let data=[
        {
            placename:"mysuru",
            placeImage:"",
            placeDiscription:"  mysure is histirocal city",

        },
        

        {
        id:3,
            placeName:nagamangala,
            placeImage:"",
            placeDiscription:" it tempel land ",
        },
        {
        id:4,
            placeName:hassan,
            placeImage:"",
            placeDiscription:" hass an is templlet lands with holding historical places",
        }

    ]

    return(
        <section>
            {
                data.map((placedata)=>{
                    console.log(placedata)
                    return(
                        <div>
                            <p>{placedata.id}</p>
                            <h1>{movieData.movieName}</h1>


                        </div>
                    )
                })
            }
        </section>
        

    )
}
export default Task1;
