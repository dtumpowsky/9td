import React, { Component } from 'react';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { switchColor, fetchMove, hideGreeting, returnToInitialGreetingState, returnToInitialGameState, returnToInitialServiceState } from '../actions/index.js';

class Greeting extends Component {

  componentDidMount() {
    confirmAlert({
      customUI: ({ onClose }) => {

        var winner;
        var playAgain;

        if(this.props.winner !== '' ) {
          playAgain = <h2 className = 'winner-header'>Play Again?</h2>

          if(this.props.winner === 'Draw') {
            winner = <h1 className = 'winner-header'>{this.props.winner}!</h1>
          } else {
            winner = <h1 className = 'winner-header'>{this.props.winner} won!</h1>
          }
        }

        return (
          <div className='custom-ui'>

            {winner}
            {playAgain}
            <br/>

            <h1 className='alert-header'>Who would you like to go first?</h1>

            <button className='greeting btn user' onClick={() =>
              {
                onClose()

                this.props.hideGreeting()
              }
            }>User</button>

            <button className='greeting btn comp' onClick={() => {
                onClose()

                this.props.sendTileDropToStore(this.props.userTurn)

                this.props.sendMoveToService(this.props.x, this.props.moves)

                this.props.hideGreeting()

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
    moves: state.serviceState.moves,
    winner: state.greetingState.winner
  }
}


const dispatchToProps = dispatch => {
  return {
    sendTileDropToStore(column) {
      dispatch(switchColor());
    },
    sendMoveToService(column, moves) {
      dispatch(fetchMove(column, moves));
    },
    hideGreeting() {
      dispatch(hideGreeting())
      dispatch(returnToInitialGreetingState())
      dispatch(returnToInitialGameState())
      dispatch(returnToInitialServiceState())
    }
  }
}

export default connect(mapStateToProps, dispatchToProps)(Greeting);
