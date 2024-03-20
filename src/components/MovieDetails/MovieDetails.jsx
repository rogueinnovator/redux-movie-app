import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fectAsynchMovieorShowDetails,
  getMovieOrShowDetails,
  removeMovieOrShow,
} from "../../features/movies/MovieSlice";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getMovieOrShowDetails);
  useEffect(() => {
    dispatch(fectAsynchMovieorShowDetails(imdbID));
    return () => {
      dispatch(removeMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div>
      {" "}
      {Object.keys(data).length === 0 ? (
        <span className="justify-center items-center h-screen loading loading-dots loading-lg size-16"></span>
      ) : (
        <div className="card w-auto bg-base-300 shadow-sm hover:bg-base-300 cursor-pointer image-full">
          <figure>
            <img src={data.Poster} alt="movie-image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">:{data.imdbRating}</h2>
            <h2 className="card-title">:{data.imdbVotes}</h2>
            <h2 className="card-title">:{data.Runtime}</h2>
            <h2 className="card-title">:{data.Year}</h2>
            <p className="text-black font-bold text-2xl  hover:scale-110 transition duration-300">
              {data.Title}
            </p>
            <div className="card-actions justify-end">
              <p className="btn">{data.Director}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
