import React, { Component } from 'react';
import { recieveMovesService } from '../actions/index.js';
import { connect } from 'react-redux';
import { dropTile } from '../actions/index.js';


class Grid extends Component {
  handleClick() {
    //identifies each uniqe cell
    this.props.sendTileDrop({x: this.props.x, y: this.props.y});
    console.log('clicked column: ', this.props.x);


  }

  render() {
    return (
      <div className="grid" onClick={() => this.handleClick()}>
        <p>{this.props.x}, {this.props.y}</p>
      </div>
    );
  }
}

const stateToProps = state => {
  return {}
}

const dispatchToProps = dispatch => {
  return {
    sendTileDrop(column) {
      dispatch(dropTile(column))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Grid);
