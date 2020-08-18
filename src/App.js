import React, { Component } from 'react';
import './App.css';

import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';

import TMDB from './TMDB';

class App extends Component {
  render() {
    let filmData = TMDB.films;

    return (
      <div className="film-library">
        <FilmListing filmData = {filmData}/>

        <FilmDetails filmData = {filmData}/>
      </div>
    );
  }
}

export default App;
