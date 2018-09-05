import React, { Component } from "react";
import axios from "axios";
import Suggestions from "./Suggestions";

class SearchMovie extends Component {
  state = {
    query: "",
    results: []
  };

  handleInputChange = () => {
    this.setState({ query: this.search.value }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo();
        }
      } else if (!this.state.query) {
      }
    });
  };

  getInfo = () => {
    axios.get("http://localhost:5000/movies").then(data => {
      console.log(data);
      this.setState({ results: data.data });
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <Suggestions results={this.state.results} />
        </form>
      </div>
    );
  }
}

export default SearchMovie;
