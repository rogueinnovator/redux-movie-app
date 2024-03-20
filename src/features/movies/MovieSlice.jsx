import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await MovieApi.get(
      `?apiKey=${APIkey}&s=${term}&type=movie`,
    );
    return response.data;
  },
);
export const fetchAsyncShows = createAsyncThunk(
  "Shows/fetchAsyncShows",
  async (term) => {
    const response = await MovieApi.get(
      `?apiKey=${APIkey}&s=${term}&type=series`,
    );
    return response.data;
  },
);
export const fectAsynchMovieorShowDetails = createAsyncThunk(
  "Shows/fectAsynchMovieorShowDetails",
  async (id) => {
    const response = await MovieApi.get(`?apiKey=${APIkey}&i=${id}&Plot=full`);
    return response.data;
  },
);
const initialState = {
  movies: {},
  shows: {},
  movieOrShowaDetails: {},
  loadingMovies: false,
  loadingShows: false,
  loadingDetails: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeMovieOrShow: (state) => {
      state.movieOrShowaDetails = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        state.loadingMovies = true;
        console.log("pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        state.loadingMovies = false;
        console.log("fetched successfully");
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state) => {
        state.loadingMovies = false;
        console.log("Rejected!");
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        state.loadingShows = false;
        console.log("shows fecthed successfully");
        state.shows = payload;
      })
      .addCase(fectAsynchMovieorShowDetails.fulfilled, (state, { payload }) => {
        state.loadingDetails = false;
        console.log("details fetched successfuly");
        state.movieOrShowaDetails = payload;
      });
  },
});

export const { removeMovieOrShow } = movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies;
export const getAllshows = (state) => state.movies.shows;
export const getloadingShows = (state) => state.movies.loadingShows;
export const getloadingDetails = (state) => state.movies.loadingDetails;
export const getloadingMovies = (state) => state.movies.loadingMovies;  
export const getMovieOrShowDetails = (state) =>
  state.movies.movieOrShowaDetails;
export default movieSlice.reducer;
