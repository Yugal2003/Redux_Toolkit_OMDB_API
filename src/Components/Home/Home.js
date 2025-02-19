import React, { useEffect } from 'react'
import movieApi from '../../Common/apis/movieApi'
import { APIKey } from '../../Common/apis/MovieApiKey'
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
    const movieText = "Harry";
    const dispatch = useDispatch();

    const fetchAPI = async()=> {
        try {
            const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
            console.log(response.data);
            dispatch(addMovies(response.data));
        } 
        catch (error) {
             console.log(error);
        }
    }

    useEffect(()=> {
        fetchAPI();
    },[])
    
  return (
    <div>
        <MovieListing/>
    </div>
  )
}

export default Home