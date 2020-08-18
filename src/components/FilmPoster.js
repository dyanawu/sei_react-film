import React, { Component } from 'react';

export default class FilmPoster extends Component {
  render() {
    let film = this.props.film;
    let posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`;

    return (
      <img src={posterUrl} alt="" />
    );
  }
}
