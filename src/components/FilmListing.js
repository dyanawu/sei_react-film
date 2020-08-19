import React, { Component } from 'react';
import FilmRow from './FilmRow';

export default class FilmListing extends Component {

  state = {
    filter: "all"
  };

  handleFilterClick = (filter) => {
    console.log("Filter:", filter);
    this.setState({filter});
  };

  render() {
    let allFilms = this.props.filmData;

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            onClick = {() => this.handleFilterClick('all')}
            className="film-list-filter">
            ALL
            <span className="section-count">{this.props.filmData.length}</span>
          </div>
          <div
            onClick = {() => this.handleFilterClick('faves')}
            className="film-list-filter">
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

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
