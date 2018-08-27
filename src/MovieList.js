import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import MovieItem from "./MovieItem";
import axios from "axios";
import "./MovieList.css";

class MovieList extends React.Component {
  state = {
    movies: []
  };

  componentWillMount() {
    axios.get("http://localhost:5000/movies").then(response => {
      console.log(response);
      this.setState({ movies: response.data });
    });
  }

  render() {
    return (
      <div className="movie-list">
        <div className="movies-container">
          {this.state.movies.length > 0
            ? this.state.movies.map((movie, i) => (
                <MovieItem
                  key={i}
                  title={movie.title}
                  year={movie.year}
                  description={movie.description}
                />
              ))
            : "No movies found."}
        </div>
        <Button variant="fab" color="secondary" aria-label="Add">
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default MovieList;
