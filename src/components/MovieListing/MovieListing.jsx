import React from "react";
import { useSelector } from "react-redux";
import {
  getAllmovies,
  getAllshows,
  getloadingMovies,
  getloadingShows,
} from "../../features/movies/MovieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllmovies);
  const shows = useSelector(getAllshows);
  const loadingShows = useSelector(getloadingShows);
  const loadingMovies = useSelector(getloadingMovies);
  
  const renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie}></MovieCard>
      ))
    ) : (
      <div className="Movie-error">
        <h3>{movies.error}</h3>
      </div>
    );

  const renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => (
        <MovieCard key={index} data={show}></MovieCard>
      ))
    ) : (
      <div className="Shows-error">
        <h3>{shows.error}</h3>
      </div>
    );

  return (
    <div>
      <div>
        {loadingMovies ? (
          <div className="justify-center items-center h-screen flex">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : (
          <div className="movie-wrapper mx-5 my-8">
            <h2 className="font-extrabold text-6xl py-5">Movies</h2>
            <div className="movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 rounded-lg">
              {renderMovies}
            </div>
          </div>
        )}
      </div>
      <div>
        {loadingShows ? (
          <div className="justify-center items-center h-screen flex">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : (
          <div className="movie-wrapper mx-5 my-8">
            <h2 className="font-extrabold text-6xl py-5">Shows</h2>
            <div className="movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 rounded-lg">
              {renderShows}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieListing;
