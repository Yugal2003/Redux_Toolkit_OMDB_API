import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from '../../Common/apis/movieApi'
import { APIKey } from '../../Common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async(terms) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${terms}&type=movie`)
    return response.data;  
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',async(terms) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${terms}&type=series`)
    return response.data;  
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail ',async(id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return response.data;  
})

const initialState = {
    movies : {},
    shows : {},
    selectMovieOrShow : {}
}

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers : {
        removeSelectedMovieOrShow : (state,{payload}) => {
            state.selectMovieOrShow = {}
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
        builder.addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state,action) =>{
            console.log("Fetched Successfully !!!");
            return {...state,selectMovieOrShow : action.payload}
        })
    }
})

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;