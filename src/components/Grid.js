import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playerMove, fetchMove } from '../actions/index.js';


class Grid extends Component {

  handleClick() {
    var x = this.props.x;

    this.props.sendTileDropToStore(x);

    this.props.sendMoveToService(x, this.props.moves);

    console.log('board: ' + this.props.board)
  }

  render() {

    var board = this.props.board;
    var x = this.props.x;
    var y = this.props.y;

    let classes = 'cell';

    if (board[x][y] !== undefined) {
      if (board[x][y] === this.props.first) {
        classes += ' p1';
      } else {
        classes += ' comp';
      }
    }

    return (
      <div className={classes} onClick={() => this.handleClick()}>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userTurn: state.gameState.userTurn,
    board: state.gameState.board,
    moves: state.serviceState.moves,
    first: state.gameState.first
  }
}

const dispatchToProps = dispatch => {
  return {
    sendTileDropToStore(column) {
      dispatch(playerMove(column));
    },
    sendMoveToService(column, moves) {
      dispatch(fetchMove(column, moves));
    }
  }
}

export default connect(mapStateToProps, dispatchToProps)(Grid);
