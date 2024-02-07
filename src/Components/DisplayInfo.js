import React from "react";
import { useLocation } from "react-router-dom";

function DisplayInfo() {
  const { state } = useLocation();
  console.log(state.moviedata);
  const moviedata = state.moviedata;
  return (
    <div className="pt-20 flex w-screen h-screen justify-center bg-emerald-800">
      <div className=" m-3 py-10 px-20 h-fit w-fit border-2 rounded-lg bg-emerald-600 border-emerald-600 shadow-md shadow-emerald-950">
        <div type="text" id={moviedata.name} className="font-bold text-2xl">
          {moviedata.name}
        </div>
        <div>Released on: {moviedata.release}</div>
        <div>Rating: {moviedata.rating}</div>
        <img
          src={moviedata.image}
          className="w-64 h-80"
          alt="not available"
        ></img>
      </div>
    </div>
  );
}

export default DisplayInfo;
