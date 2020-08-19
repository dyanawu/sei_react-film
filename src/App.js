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

  handleFaveToggle = (film) => {
    console.log(film);
    let faves = this.state.faves.slice();
  }

  render() {
    let filmData = TMDB.films;

    return (
      <div className="film-library">
        <FilmListing
          films={this.state.films}
          faves={this.state.faves}
        />

        <FilmDetails
          film={this.state.current}
        />
      </div>
    );
  }
}

export default App;
