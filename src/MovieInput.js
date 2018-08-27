import React from "react";
import axios from "axios";
import "./MovieList.css";

class MovieInput extends React.Component {
  state = {
    title: "",
    year: "",
    description: ""
  };

  handleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = event => {
    // Daca e activ, atunci trebuie sa dai Refresh pentru a aparea noul card.
    // event.preventDefault();

    const user = {
      title: this.state.title,
      year: this.state.year,
      description: this.state.description,
      id: this.state.title
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
          <input type="text" name="title" onChange={this.handleChange} />
        </label>
        <label>
          Movie year:
          <input type="text" name="year" onChange={this.handleChange} />
        </label>
        <button type="submit">ADD</button>
      </form>
    );
  }
}

export default MovieInput;
