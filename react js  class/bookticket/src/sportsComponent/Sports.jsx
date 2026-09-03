import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Sports = () => {

  let [sports,setSports]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/sports')
    .then((res)=>{
      console.log(res.data)
      setSports(res.data)
    })
  },[])
  return (
    <section className="container">
      {
        sports.map((sport)=>{
          console.log(sport)
          return(
            <aside className="movie-card">
              <h2>Sports Name :{sport.title}</h2>
              <img src={sport.img} height={250} width={250} alt="" />
              <h3>Team : {sport.team}</h3>
              <NavLink to={`/details/sports/${sport.id}`}><button>View Details</button></NavLink>
            </aside>
          )
        })
      }
    </section>
  )
}

export default Sports