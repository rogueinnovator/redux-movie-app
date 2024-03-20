import React from "react";
import { Link } from "react-router-dom";
const MovieCard = (props) => {
  const { data } = props;
  const wordslimit = 6;
  let text = data.Title;
  const limitedTitle = (text, wordslimit) => {
    const words = text.split(" ");
    if (words.length > wordslimit) {
      return words.slice(0, wordslimit).join(" ") + "...";
    }
    return text;
  };
  const title = limitedTitle(text, wordslimit);
  return (
    <div className="card w-50 shadow-xl bg-slate-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-body">
          <h2 className="card-title text-black ">
            {title}
          </h2>{" "}
        </div>
        <figure>
          <img
            className="rounded-lg cursor-pointer hover:scale-110 transition duration-300"
            src={data.Poster}
            alt={data.Title}
          />
        </figure>
        <p className="text-black py-3">{}</p>
        <p className="text-black py-3">{data.Year}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
