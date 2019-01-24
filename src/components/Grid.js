import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dropTile, addMove, sendMoveService } from '../actions/index.js';



class Grid extends Component {
  handleClick() {
    //identifies each uniqe cell
    // this.props.sendTileDrop({x: this.props.x, y: this.props.y});
    var x = this.props.x;
    console.log('this.props.x; ' + x)
    console.log('clicked column: ' + x);
    console.log('pushed: ' + this.props.serviceState.slice().push(x));

    this.props.sendTileDropToStore(x);

    fetch('https://w0ayb2ph1k.execute-api.us-west-2.amazonaws.com/production?moves=[' + this.props.serviceState.slice().push(x) + ']', {
      method: 'GET'
    }).then(response => response.json())
    .then(json => {
        console.log('returned: ' + json);
        this.props.sendMoveToService(json)
        this.props.sendTileDropToStore(json.pop())
    });


    var board = this.props.board;



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
      if (board[x][y] === 1) {
        classes += ' p2';
      } else {
        classes += ' p1';
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
    serviceState: state.serviceState
  }

}

const dispatchToProps = dispatch => {
  return {
    //update state
    sendTileDropToStore(column) {
      dispatch(dropTile(column));
      dispatch(addMove(column));
    },
    sendMoveToService(column) {
      dispatch(sendMoveService(column))
    }
  }
}

export default connect(mapStateToProps, dispatchToProps)(Grid);
