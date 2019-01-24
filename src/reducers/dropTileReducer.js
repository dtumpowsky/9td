// import constants from './../constants';
// const { initialState } = constants;
// import { dropTile } from '../actions';

import { initialState } from '../reducers';

//sending payload to store
function dropTileReducer(state = initialState, action) {

  if(action.type === 'DROP_TILE') {

    var userTurn = state.userTurn
    var payload = action.payload; //index
    var board = state.board.slice();
    board[action.payload].push(userTurn); //pushes index into array

    //TODO
    // var sendArray = board[action.payload].push(payload)

    //
    console.log('new state.board: ' + board[0])
    console.log('new state.board: ' + board[1])
    console.log('new state.board: ' + board[2])
    console.log('new state.board: ' + board[3])



    return {
      userTurn: state.userTurn === 1 ? 2 : 1,
      board: board
    }
  }
  return state;
}

export default dropTileReducer;
