import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/MovieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  };

  return (
    <div className="navbar bg-black rounded-full">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Movies
        </Link>
      </div>
      <div className="flex-none gap-2">
        <form onSubmit={handleSubmit} className="form-control">
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </form>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-14 rounded-sm">
              <img className="py-3"
                alt="User"
                src=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
