import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from '../../Common/apis/movieApi'
import { APIKey } from '../../Common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async() => {
    const movieText = "Harry";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    return response.data;  
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',async() => {
    const movieText = "boy";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=series`)
    return response.data;  
})

const initialState = {
    movies : {},
    shows : {},
}

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers : {
        addMovies : (state,{payload}) => {
            state.movies = payload;
        }
    },
    extraReducers : (builder) =>{
        builder.addCase(fetchAsyncMovies.pending, (state,action)=> {
            console.log("Pending !!!");
        })
        builder.addCase(fetchAsyncMovies.fulfilled, (state,action)=> {
            console.log("Fetched Successfully !!!");
            return {...state, movies : action.payload}
        })
        builder.addCase(fetchAsyncMovies.rejected, (state,action)=> {
            console.log("Rejected !!!");
        })
        builder.addCase(fetchAsyncShows.fulfilled, (state,action)=> {
            console.log("Fetched Successfully !!!");
            return {...state, shows : action.payload}
        })
    }
})

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;