import React, { Component, setState  } from 'react';
import { connect } from 'react-redux';
import { dropTile, fetchMove, switchColor } from '../actions/index.js';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Greeting from './Greeting.js'


class Grid extends Component {
  handleClick() {
    //identifies each uniqe cell

    var x = this.props.x;

    this.props.sendTileDropToStore(x);

    this.props.sendMoveToService(x, this.props.moves);

  }

  // GcomponentDidMount() {
  //   confirmAlert({
  //     customUI: ({ onClose }) => {
  //       return (
  //         <div className='custom-ui'>
  //           <h1>Who would you like to go first?</h1>
  //
  //           <button className='greeting btn user' onClick={onClose}>User</button>
  //
  //           <button className='greeting btn comp' onClick={() => {
  //               onClose()
  //
  //
  //               console.log(this.props.userTurn)
  //               this.props.sendMoveToService(this.props.x, this.props.moves)
  //
  //           }}>CPU</button>
  //         </div>
  //       )
  //     }
  //   })
  // }

  render() {


    var userTurn = this.props.userTurn;
    var board = this.props.board;
    var x = this.props.x;
    var y = this.props.y;


    let classes = 'cell';


    if (board[x][y] !== undefined) {

      if (board[x][y] === 1) {
        classes += ' p1';
      } else {
        classes += ' comp';
      }
    }

    //WIN CONDITIONS
    if(
      (board[x][0] === 1 && board[x][1] === 1 && board[x][2] === 1 && board[x][3] === 1) ||
      (board[0][y] === 1 && board[1][y] === 1 && board[2][y] === 1 && board[3][y] === 1) ||
      (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1 && board[3][3] === 1) ||
      (board[3][0] === 1 && board[2][1] === 1 && board[1][2] === 1 && board[0][3] === 1)
    ){
      console.log('*** Player 1 WINS ***')

    } else if (
      (board[x][0] === 2 && board[x][1] === 2 && board[x][2] === 2 && board[x][3] === 2) ||
      (board[0][y] === 2 && board[1][y] === 2 && board[2][y] === 2 && board[3][y] === 2) ||
      (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2 && board[3][3] === 2) ||
      (board[3][0] === 2 && board[2][1] === 2 && board[1][2] === 2 && board[0][3] === 2)
    ){
      console.log('*** COMPUTER WINS ***')
    } else if(
      board[0].length === 4 && board[1].length === 4  && board[2].length === 4  && board[3].length === 4)
    {
      //DRAW CONDITION
      console.log('*** BOARD IS FULL ***')
    }

//TODO close, doesnt quite work
    if (board[x].length > 4) {
      board[x].pop(x);
      if(board[y] === undefined) {
        board.push(x)
      }
      console.log('*** PICK ANOTHER ***');
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
    moves: state.serviceState.moves
  }

}

const dispatchToProps = dispatch => {
  return {
    //update state
    sendTileDropToStore(column) {
      dispatch(dropTile(column));
    },
    sendMoveToService(column, moves) {
      dispatch(fetchMove(column, moves));
    }
  }
}

export default connect(mapStateToProps, dispatchToProps)(Grid);
