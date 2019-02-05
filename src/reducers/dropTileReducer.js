import { initialState } from '../reducers';

//sending payload to store
function dropTileReducer(state = initialState, action) {

  if(action.type === 'DROP_TILE') {

    var userTurn = state.userTurn;
    var payload = action.payload; //index
    var board = state.board.slice(); //copy of board

    board[payload].push(userTurn); //pushes index into array


    return {
      userTurn: state.userTurn === 1 ? 2 : 1,
      board: board
    }
  }

  if(action.type === 'SWITCH_COLOR') {
    var userTurn = state.userTurn;

    var board = state.board.slice(); //copy of board

    return {
      userTurn: state.userTurn === 2 ? 1 : 2,
      board: board
    }
  }
  return state;
}

export default dropTileReducer;
