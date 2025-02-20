import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'

const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    console.log(movies.movies);
    let renderMovies,renderShows = ""

    renderMovies = movies.Response === 'True' ? (movies.Search.map((movie,index) => (
        <MovieCard key={index} data={movie}/>
      ))
    ) 
    : 
    (
        <div><h3>{movies.Error}</h3></div>
    )

    renderShows = shows.Response === 'True' ? (shows.Search.map((movie,index) => (
      <MovieCard key={index} data={movie}/>
    ))
  ) 
  : 
  (
      <div><h3>{shows.Error}</h3></div>
  )
    
  return (
    <div className="flex flex-col gap-10 px-4 mt-24">
            {/* Movies Section */}
            <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Movies</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {renderMovies}
                </div>
            </div>

            {/* Shows Section */}
            <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Shows</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {renderShows}
                </div>
            </div>
        </div>
  )
}

export default MovieListing