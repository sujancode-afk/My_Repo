import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Movies = () => {

  let [movies,setMovies]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/movies')
    .then((res)=>{
      console.log(res.data)
      setMovies(res.data)
    })
  },[])
  return (
    <section className="container">
      {
        movies.map((movie)=>{
          console.log(movie)
          return(
            <aside className="movie-card">
              <h2>Title: {movie.title}</h2>
              <img src={movie.img} alt="" height={250} width={250} />
              <h3>Genre :{movie.genre}</h3>
              <NavLink to={`/details/movies/${movie.id}`}><button>View Details</button></NavLink>
            </aside>
          )
        })
      }
    </section>
  )
}

export default Movies