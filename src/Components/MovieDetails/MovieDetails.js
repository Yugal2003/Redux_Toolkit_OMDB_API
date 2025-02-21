import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';

const MovieDetails = () => {
  let {imdbID} = useParams();
  console.log(imdbID);
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID))

    return () => {
      dispatch(removeSelectedMovieOrShow());
    }
  },[dispatch,imdbID])
  return (
    <div className='mt-20'>
      {
        Object.keys(data).length === 0 ? 
        (
          <div>
              <h2 className='flex justify-center items-center w-full mx-auto font-bold text-2xl text-white'>Loading...</h2>
          </div>
        ) : 
        (
          <div className='flex flex-col md:flex-row justify-between mx-auto px-4 items-center w-full'>
              {/* left side */}
              <div className='w-[100%] md:w-[80%] p-8'>
                  <div>
                    <h1 className='text-white text-3xl font-bold'>{data.Title}</h1>
                  </div>
                  <div className='flex flex-col md:flex-row pt-8 gap-12'>
                    <span className='text-blue-500'>IMDB Rating : {data.imdbRating}</span>
                    <span className='text-blue-500'>IMDB Votes : {data.imdbVotes}</span>
                    <span className='text-blue-500'>Runtime : {data.Runtime}</span>
                    <span className='text-blue-500'>Year : {data.Year}</span>
                  </div>
                  <div className='pt-8'>
                    <h1 className='text-gray-200 font-sans'>{data.Plot}</h1>
                  </div>
                  <div className='flex flex-col gap-4 my-8'>
                    <div className='flex items-center'>
                      <span className='text-white min-w-[120px]'>Director :</span>
                      <span className='text-blue-500'>{data.Director}</span>
                    </div>
                    <div className='flex items-center'>
                      <span className='text-white min-w-[120px]'>Collections : </span>
                      <span className='text-blue-500'>{data.BoxOffice}</span>
                    </div>
                    <div className='flex items-center'>
                      <span className='text-white min-w-[120px]'>Genres :</span>
                      <span className='text-blue-500'>{data.Genre}</span>
                    </div>
                    <div className='flex items-center'>
                      <span className='text-white min-w-[120px]'>Languages : </span>
                      <span className='text-blue-500'>{data.Language}</span>
                    </div>
                    <div className='flex items-center'>
                      <span className='text-white min-w-[120px]'>Awards : </span>
                      <span className='text-blue-500'>{data.Awards}</span>
                    </div>
                  </div>
              </div>
              {/* right side */}
              <div className='w-[80%] md:w-[20%] p-4'>
                <img src={data.Poster} className='rounded-lg hover:scale-105 duration-500 cursor-pointer' alt='img'/>
              </div>
          </div>
        )
      }
    </div>
  )
}

export default MovieDetails