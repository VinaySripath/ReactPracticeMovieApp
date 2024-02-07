import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import R from "../src/images/R.jpg";
import Joker from "../src/images/Joker.jpg";
import twntwl from "../src/images/2012.jpg";
import frozen from "../src/images/Frozen.jpg";
import infinitywar from "../src/images/Infinitywar.jpg";
import spiderman from "../src/images/theamazingspiderman.jpg";
import lionking from "../src/images/thelionking.jpg";
import thorragnarok from "../src/images/thorragnarok.jpg";
import titanic from "../src/images/Titanic.jpg";
import zootopia from "../src/images/Zootopia.jpg";
import Search from "./Components/Search";
import DisplayInfo from "./Components/DisplayInfo";
import AddMovie from "./Components/AddMovie";

function App() {
  const [movies, setMovies] = useState([
    { name: "Harry Potter", release: 2002, rating: 10, image: R },
    { name: "Joker", release: 2020, rating: 10, image: Joker },
    { name: "2012", release: 2009, rating: 8, image: twntwl },
    { name: "Frozen", release: 2014, rating: 9, image: frozen },
    { name: "Infinity war", release: 2020, rating: 9.5, image: infinitywar },
    { name: "Spider Man", release: 2024, rating: 9, image: spiderman },
    { name: "Lion King", release: 1999, rating: 9.7, image: lionking },
    { name: "Thor Ragnarok", release: 2018, rating: 8.5, image: thorragnarok },
    { name: "Titanic", release: 2000, rating: 9.2, image: titanic },
    { name: "Zootopia", release: 2016, rating: 9.6, image: zootopia },
  ]);
  const [searchkey, setSearchKey] = useState("");
  return (
    <div>
      <BrowserRouter>
        <Header searchkey={searchkey} setSearchKey={setSearchKey}></Header>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home movies={movies} setMovies={setMovies}></Home>}
          ></Route>
          <Route
            exact
            path="/search/:key"
            element={<Search movies={movies}></Search>}
          ></Route>
          <Route
            exact
            path="/info"
            element={<DisplayInfo></DisplayInfo>}
          ></Route>
          <Route
            exact
            path="/new"
            element={
              <AddMovie setMovies={setMovies} movies={movies}></AddMovie>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
