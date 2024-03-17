import  { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/MovieSlice";
const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apikey=${APIkey}&s=${movieText}&type=movie`,
      ).catch((err) => {
        console.log(err);
      });
      dispatch(addMovies(response.data));
      console.log("da talaq msg 2 pery print kai")
    };
    fetchMovies();
  }, [dispatch]);

  return <div>{<MovieListing />}</div>;
};

export default Home;
