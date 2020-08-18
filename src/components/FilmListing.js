import React, { Component } from 'react';
import FilmRow from './FilmRow';

export default class FilmListing extends Component {
  render() {
    let allFilms = this.props.filmData;

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <ul>
          { allFilms.map(film => (
            <FilmRow
              key={film.id}
              film={film}
            />
          ))}
        </ul>
      </div>
    );
  }
}
