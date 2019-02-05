import React, { Component } from 'react';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { handleClick } from './Grid.js';
import { switchColor, fetchMove } from '../actions/index.js';

class Greeting extends Component {

componentDidMount() {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className='custom-ui'>
          <h1>Who would you like to go first?</h1>

          <button className='greeting btn user' onClick={onClose}>User</button>

          <button className='greeting btn comp' onClick={() => {
              onClose()


              this.props.sendTileDropToStore(this.props.userTurn)

              this.props.sendMoveToService(this.props.x, this.props.moves)

          }}>CPU</button>
        </div>
      )
    }
  })
}

  render() {


    return(
      <div onClick={() => this.confirmAlert()}>

      </div>
    )
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
      dispatch(switchColor());
    },
    sendMoveToService(column, moves) {
      dispatch(fetchMove(column, moves));
    }
  }
}

export default connect(mapStateToProps, dispatchToProps)(Greeting);
