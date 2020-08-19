import React, { Component } from 'react';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';

export default class Fave extends Component {
  handleClick = (e) => {
    e.stopPropagation();
    this.props.onFaveToggle();
  }

  render() {
    const isFave = this.state.isFave ? "remove_from_queue" : "add_to_queue";
    let faveClass = `film-row-fave ${isFave}`;
    return (
      <div
        onClick={this.handleClick}
        className={faveClass} >
        <AddToQueueIcon />
      </div>
    );
  }
}
