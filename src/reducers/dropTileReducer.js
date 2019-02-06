import { initialState } from '../reducers';

function dropTileReducer(state = initialState, action) {

  if(action.type === 'DROP_TILE') {

    var userTurn = state.userTurn;
    var payload = action.payload; //column index
    var board = state.board.slice();

    board[payload].push(userTurn);


    return {
      userTurn: state.userTurn === 1 ? 2 : 1,
      board: board,
      first: state.first
    }
  }

  if(action.type === 'SWITCH_COLOR') {
    var userTurn = state.userTurn;

    var board = state.board.slice();

    return {
      userTurn: state.userTurn === 2 ? 1 : 2,
      board: board,
      first: 2
    }
  }

  if(action.type === 'RETURN_TO_INITIAL_GAME_STATE')
  {
    var newState = {
      userTurn : state.userTurn,
      board: [
        [],
        [],
        [],
        []
      ],
      first : 1
    }
    return newState
  }

  return state;
}

export default dropTileReducer;
