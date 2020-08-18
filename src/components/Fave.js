import React, { Component } from 'react';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';

export default class Fave extends Component {
  handleClick = (e) => {
    console.log(e);
    console.log("click");
    e.stopPropagation();
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        className="film-row-fave add_to_queue">
        <AddToQueueIcon />
      </div>
    );
  }
}
