import React from "react";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  function changeHandler(event) {
    props.setSearchKey(event.target.value);
    if (event.target.value !== "") {
      navigate(`/search/:${event.target.value}`);
    } else {
      navigate("/");
    }
  }
  function handleHome() {
    navigate("/");
  }
  function handleAdd() {
    navigate("/new");
  }
  return (
    <div className="w-screen flex justify-between content-center p-2 bg-slate-900 fixed">
      <button
        className="p-2 pl-5 font-bold text-xl text-white"
        onClick={handleHome}
      >
        MovieFlix
      </button>
      <div className="flex justify-between content-center">
        <button
          className="p-2 mr-4 font-semibold text-m text-white"
          onClick={handleAdd}
        >
          Add Movies
        </button>
        <span>
          <input
            className="p-1 pl-4 mt-1 mr-5 border-2 rounded-full"
            type="text"
            placeholder="search"
            onChange={changeHandler}
          ></input>
        </span>
      </div>
    </div>
  );
}

export default Header;
