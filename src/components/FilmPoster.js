import React from 'react';

export default function FilmPoster(props) {
  let film = props.film;
  let posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`;

  return (
      <img src={posterUrl} alt="" />
  );
}
