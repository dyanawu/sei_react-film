import React, { Component } from 'react';
import './App.css';

import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';

import TMDB from './TMDB';

import axios from 'axios';

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

  handleDetailsClick = (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;

    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response); // take a look at what you get back!
      this.setState({ current: response.data });
    });
  };

  render() {
    return (
      <div className="film-library">
        <FilmListing
          films={this.state.films}
          faves={this.state.faves}
          onFaveToggle = {this.handleFaveToggle}
          onFilmClick={this.handleDetailsClick}
        />

        <FilmDetails
          film={this.state.current}
        />
      </div>
    );
  }
}

export default App;
