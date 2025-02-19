import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'

const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    console.log(movies);
    let renderMovies = ""

    renderMovies = movies.Response === 'True' ? (movies.Search.map((movie,index) => (
        <MovieCard key={index} data={movie}/>
      ))
    ) 
    : 
    (
        <div><h3>{movies.Error}</h3></div>
    )
  return (
    <div>
        {renderMovies}
    </div>
  )
}

export default MovieListing