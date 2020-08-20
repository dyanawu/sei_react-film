import React, { Component } from 'react';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';

export default class Fave extends Component {
  handleClick = (e) => {
    e.stopPropagation();
    this.props.onFaveToggle();
  }

  render() {
    let isFave = this.props.isFave;
    const actionClass = isFave ? "remove_from_queue" : "add_to_queue";
    let faveClass = `film-row-fave ${actionClass}`;

    return (
      <div
        onClick={this.handleClick}
        className={faveClass} >
        {isFave ? <RemoveFromQueueIcon /> : <AddToQueueIcon />}
      </div>
    );
  }
}
