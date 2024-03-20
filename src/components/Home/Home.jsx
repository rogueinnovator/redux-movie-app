import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/MovieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const movieText = "harry";
  const showText = "movies";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return <MovieListing />;
};

export default Home;
