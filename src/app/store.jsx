import { configureStore } from "@reduxjs/toolkit";
import MovieReducers from "../features/movies/MovieSlice";
export const store = configureStore({
  reducer: {
    reducer: MovieReducers,
  },
});
