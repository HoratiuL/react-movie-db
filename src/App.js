import React, { Component } from 'react';
import Header from './Header';
import MovieList from './MovieList';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList />
      </div>
    );
  }
}

export default App;
