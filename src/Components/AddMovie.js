import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMovie(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState();
  function nameChangeHandler(event) {
    setName(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }
  function ratingChangeHandler(event) {
    setRating(event.target.value);
  }
  function imageChangeHandler(event) {
    setImage(URL.createObjectURL(event.target.files[0]));
  }
  function submitHandler(event) {
    event.preventDefault();
    props.setMovies([
      ...props.movies,
      {
        name: name,
        release: date,
        rating: rating,
        image: image,
      },
    ]);
    navigate("/");
  }
  return (
    <div className="pt-32 flex w-screen min-h-screen h-fit justify-center bg-emerald-800">
      <form className=" m-3 py-10 px-20 h-fit w-fit border-2 rounded-lg bg-emerald-600 border-emerald-600 shadow-md shadow-emerald-950 flex flex-col">
        <label htmlFor="name" className="my-2">
          Movie Name
        </label>
        <input
          id="name"
          type="text"
          className="rounded-md"
          onChange={nameChangeHandler}
        ></input>
        <label htmlFor="date" className="my-2">
          Movie Release Year
        </label>
        <input
          id="date"
          type="number"
          className="rounded-md"
          onChange={dateChangeHandler}
        ></input>
        <label htmlFor="rating" className="my-2">
          Rating
        </label>
        <input
          id="rating"
          type="number"
          className="rounded-md"
          onChange={ratingChangeHandler}
        ></input>
        <label htmlFor="image" className="my-2">
          Cover Image
        </label>
        <input
          id="image"
          type="file"
          className="rounded-md"
          onChange={imageChangeHandler}
        ></input>
        {image && (
          <img src={image} alt="not uploaded" className=" mt-3 w-24 h-32"></img>
        )}
        <button
          type="submit"
          className="w-32 h-6 mt-4 pb-2 px-5 bg-emerald-200 flex justify-center rounded-full"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
