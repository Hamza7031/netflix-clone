import axios from './axios';
import React, { useState, useEffect } from 'react'
import "./Row.css"


function Row({title, fetchUrl, isLargeRow=false}) {
    const[movies, setMovies]=useState([]);

    const base_url="https://image.tmdb.org/t/p/original/";

useEffect(()=> {
async function fetchData(){
    const requests =await axios.get(fetchUrl);
    setMovies(requests.data.results);
    return requests;

}
fetchData();
}, [fetchUrl])


  return (
    <div className="row">
<h2>{title}</h2>
<div className="row_posters">
{movies && movies.map((movie)=> (
    <img
    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
    key={movie.id}
    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
    alt={movie.name} 
    />
))}
</div>

    </div>
  )
}

export default Row;