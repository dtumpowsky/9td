import React, { Component } from 'react';

class Grid extends Component {
  handleClick() {
    console.log('clicked column: ', this.props.x)
  }

  render() {
    return (
      <div className="grid" onClick={() => this.handleClick()}>
        <p>{this.props.x}, {this.props.y}</p>
      </div>
    );
  }
}

export default Grid
