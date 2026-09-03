import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

const Details = () => {

    let [details,setDetails]=useState({});
    let {id,type}=useParams();

    useEffect(()=>{
        axios.get(`http://localhost:3000/${type}/${id}`)
        .then((res)=>{
            setDetails(res.data)
            console.log(res.data)

        })
    },[id,type])

  return (
        <div className="details-container">
            <article className="details-card">
                <h2>Title: {details.title}</h2>
                <img src={details.img} alt="" />
                <h3>{details.team}</h3>
                <h3>{details.genre}</h3>
                <h3>{details.stadium}</h3>
                <h3>Available Seats :{details.seats}</h3>
                <NavLink to={`/booking/${type}/${details.id}`}><button>Book Tickets</button></NavLink>
            </article>
        </div>

  )
}

export default Details