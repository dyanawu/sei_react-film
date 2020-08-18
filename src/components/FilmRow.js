import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

export default class FilmRow extends Component {
  render() {
    let film = this.props.film;
    let posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`;


    return (
      <div className="film-row">
        <FilmPoster film={film} />
        <div className="film-summary">
          <h1>{film.title}</h1>
          <p>{new Date(film.release_date).getFullYear()}</p>
        </div>
        <Fave />
      </div>
    );
  }
}
