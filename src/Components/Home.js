import React from "react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  function handleShowMovieInfo(event) {
    console.log("function called");
    console.log(event.target.id);
    let movietoview = {};
    props.movies.forEach((movie) => {
      if (movie.name === event.target.id) {
        movietoview = movie;
      }
    });
    navigate("/info", { state: { moviedata: movietoview } });
  }
  return (
    <div className="pt-20 flex flex-wrap bg-emerald-800 min-h-screen h-fit w-screen">
      {props.movies.map((movie, index) => (
        <div
          key={index}
          className="p-4 m-3 h-fit w-fit border-2 rounded-lg bg-emerald-600 border-emerald-600 shadow-md shadow-emerald-950"
        >
          <button type="text" id={movie.name} onClick={handleShowMovieInfo}>
            {movie.name}
          </button>
          <div>Released on: {movie.release}</div>
          <div>Rating: {movie.rating}</div>
          <img
            src={movie.image}
            className="w-24 h-32"
            alt="not available"
          ></img>
        </div>
      ))}
    </div>
  );
}

export default Home;
