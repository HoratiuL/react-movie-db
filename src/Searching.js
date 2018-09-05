import React, { Component } from "react";
import axios from "axios";

class Searching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentWillMount() {
    axios.get(`http://localhost:5000/movies`).then(response => {
      console.log(response);
      this.setState({ movies: response.data });
    });
  }

  render = () => {
    return (
      <div>
        {this.state.movies.map(movie => (
          <li>{movie.title}</li>
        ))}
      </div>
    );
  };
}

export default Searching;
