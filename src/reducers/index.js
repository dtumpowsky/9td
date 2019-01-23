import { combineReducers, createStore } from 'redux';
import dropTileReducer from './dropTileReducer';


//single reducer to modify board and user turn
export const initialState = {
  gameState: {
    userTurn : 'player 1',
    board: [
      [],
      [],
      [],
      []
    ]
  }
};


const rootReducer = createStore(
  combineReducers({
    gameState: dropTileReducer
  }),
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootReducer;
