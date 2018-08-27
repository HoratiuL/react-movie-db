import React, { Component } from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import MovieInput from "./MovieInput";
import "./App.css";
import "./MovieList.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MovieInput />
        <MovieList />
      </div>
    );
  }
}

export default App;
