import React, { Component } from 'react';
import { recieveMovesService } from '../actions/index.js';
import { connect } from 'react-redux';
import { dropTile } from '../actions/index.js';



class Grid extends Component {
  handleClick() {
    //identifies each uniqe cell
    // this.props.sendTileDrop({x: this.props.x, y: this.props.y});
    this.props.sendTileDropToStore(this.props.x, this.props.y);

    console.log('clicked column: ', this.props.x);

    var board = this.props.board;

    console.log('board: ' + this.props.board)
  }

  render() {


    var userTurn = this.props.userTurn;
    var board = this.props.board;
    var x = this.props.x;
    var y = this.props.y;


    console.log('userTurn: ' + this.props.userTurn)

    let classes = 'cell';


    return (
      <div className={classes} onClick={() => this.handleClick()}>
        <p>{this.props.x}, {this.props.y}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userTurn: state.gameState.userTurn,
    board: state.gameState.board
  }
}

const dispatchToProps = dispatch => {
  return {
    sendTileDropToStore(column) {
      dispatch(dropTile(column))
    }
  }
}

export default connect(mapStateToProps, dispatchToProps)(Grid);
