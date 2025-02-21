import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Header = ({isHeaderVisible}) => {
  const [terms,setTerms] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(fetchAsyncMovies(terms))
    dispatch(fetchAsyncShows(terms));
    setTerms("");
  }
  return (
    <div>
      <div
        style={{ 
          transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
          border: "rgba(221, 221, 221, 0.8)",
        }}
       className='fixed z-50 w-full bg-blue-950 top-0 duration-500 mx-auto border-b border-white'>
        <div className='flex w-[90%] mx-auto justify-between h-[80px] items-center'>
            <div>
              <Link to='/'>
                <h1 className='cursor-pointer text-3xl font-bold text-white'>Movie App</h1>
              </Link>
            </div>
            <div className='flex gap-8 items-center'>
              <div className='flex items-center gap-4'>
                <form onSubmit={submitHandler}>
                  <input className='p-1 rounded-lg' type='text' value={terms} placeholder='Search Movie & Shows...' onChange={(e)=> setTerms(e.target.value)}/>
                  <button className='ml-4' type='submit'></button>
                </form>
              </div>
              <div>
                <FaRegUserCircle color='white' className='cursor-pointer' size={35}/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header