import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

export default function FilmRow(props) {
  let film = props.film;

  return (
    <div
      onClick = {props.onFilmClick}
      className="film-row"
    >

      <FilmPoster film={film} />

      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{new Date(film.release_date).getFullYear()}</p>
      </div>

      <Fave
        isFave={props.isFave}
        onFaveToggle={props.onFaveToggle}
      />

    </div>
  );
}
