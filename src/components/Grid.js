import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dropTile, fetchMove } from '../actions/index.js';



class Grid extends Component {
  handleClick() {
    //identifies each uniqe cell

    var x = this.props.x;

    this.props.sendTileDropToStore(x);

    this.props.sendMoveToService(x, this.props.moves);



  }

  render() {


    var userTurn = this.props.userTurn;
    var board = this.props.board;
    var x = this.props.x;
    var y = this.props.y;

    //
    // console.log('userTurn: ' + this.props.userTurn)
    // console.log('service: ' + this.props.serviceState)

    let classes = 'cell';


    if (board[x][y] !== undefined) {
      //full board: draw
      if (board[x][y].length > 4 && board[y].length >= 4){
        console.log('board is full')


      }
      else if (board[x][y] === 1) {
        classes += ' p1';
      } else {
        classes += ' comp';
      }
    }



//TODO win condition

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
    moves: state.serviceState.moves
  }

}

const dispatchToProps = dispatch => {
  return {
    //update state
    sendTileDropToStore(column) {
      dispatch(dropTile(column));
      // dispatch(addMove(column));
    },
    sendMoveToService(column, moves) {
      dispatch(fetchMove(column, moves));
    }
  }
}

export default connect(mapStateToProps, dispatchToProps)(Grid);
