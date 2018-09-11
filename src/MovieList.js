import React from "react";
import MovieItem from "./MovieItem";
import SearchBar from "./Components/SearchBar";
import "./MovieList.css";
import "./Components/SearchBar.css";

function MovieList(props) {
  const { movies = [], addMovie, deleteMovie } = props;

  return (
    <div className="movie-list">
      <div className="search-container">
        <SearchBar addMovie={addMovie} />
      </div>
      <div className="movies-container">
        {movies.length > 0
          ? movies.map(movie => (
              <MovieItem
                key={movie.id}
                title={movie.title}
                year={movie.year}
                imageUrl={movie.poster}
                plot={movie.plot}
                deleteMovie={deleteMovie}
                id={movie.id}
              />
            ))
          : "No movies found."}
      </div>
    </div>
  );
}

export default MovieList;
