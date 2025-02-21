import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  let {data} = props
  console.log(data);
  
  return (
    <Link to={`/movie/${data.imdbID}`}>
      <div className="cursor-pointer max-h-[500px] w-auto p-4 rounded-lg shadow-2xl bg-white">
          <div>
              <img src={data.Poster} alt={data.Title} className="hover:scale-105 duration-500 w-full h-auto rounded-lg object-cover bg-no-repeat " />
          </div>
          <div className="mt-2 text-center font-semibold">
              {data.Title}
          </div>
          <div className="flex items-center justify-between mt-2 text-sm">
              <div><span className='font-bold text-base'>Year</span> : {data.Year}</div>
              <div><span className='font-bold text-base'>Content</span> : {data.Type}</div>
          </div>
      </div>
    </Link>
  )
}

export default MovieCard