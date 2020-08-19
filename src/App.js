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
    const filmIndex = faves.indexOf(film);

    if (filmIndex === -1) {
      console.log("add");
      faves.push(film);
    } else {
      console.log("remove");
      faves.splice(filmIndex, 1);
    }

    this.setState({faves});
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
