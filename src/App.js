import React, { Component } from 'react';
import './App.css';

import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';

import TMDB from './TMDB';

class App extends Component {
  state = {
    films: TMDB.films,
    faves: [],
    current: {}
  }

  render() {
    let filmData = TMDB.films;

    return (
      <div className="film-library">
        <FilmListing
          films = {this.state.films}
        />

        <FilmDetails
          film = {this.state.current}
        />
      </div>
    );
  }
}

export default App;
