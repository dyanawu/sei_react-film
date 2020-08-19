import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

export default class FilmRow extends Component {
  render() {
    let film = this.props.film;

    return (
      <div
        onClick = {this.props.onFilmClick}
        className="film-row">
        <FilmPoster film={film} />
        <div className="film-summary">
          <h1>{film.title}</h1>
          <p>{new Date(film.release_date).getFullYear()}</p>
        </div>
        <Fave
          isFave={this.props.isFave}
          onFaveToggle={this.props.onFaveToggle}
        />
      </div>
    );
  }
}
