import React from "react";
import axios from "axios";
import "./MovieList.css";

class MovieInputTest extends React.Component {
  state = {
    title: "",
    year: "",
    description: "",
    id: ""
  };

  handleTitle = (event, title) => {
    this.setState({ title: event.target.value });
  };

  handleYear = (event, year) => {
    this.setState({ year: event.target.value });
  };

  handleDescription = (event, description) => {
    this.setState({ description: event.target.value });
  };

  handleSubmit = event => {
    // Daca e activ, atunci trebuie sa dai Refresh pentru a aparea noul card.
    // event.preventDefault();

    const user = {
      title: this.state.title,
      year: this.state.year,
      description: this.state.description,
      id: this.state.index
    };

    axios
      .post("http://localhost:5000/movies", { ...user })
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
      .catch(error => {});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Movie title:
          <input type="text" name="title" onChange={this.handleTitle} />
        </label>
        <label>
          Movie year:
          <input type="text" name="year" onChange={this.handleYear} />
        </label>
        <label>
          Description:
          <input type="text" name="year" onChange={this.handleDescription} />
        </label>
        <button type="submit">ADD 1</button>
      </form>
    );
  }
}

export default MovieInputTest;
