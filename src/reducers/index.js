import { combineReducers, createStore } from 'redux';
import dropTileReducer from './dropTileReducer';
import serviceStateReducer from './serviceStateReducer';


//single reducer to modify board and user turn
export const initialState = {
  gameState: {
    userTurn : 1,
    board: [
      [],
      [],
      [],
      []
    ]
  },
  serviceState: []
};


const rootReducer = createStore(
  combineReducers({
    gameState: dropTileReducer,
    serviceState: serviceStateReducer
  }),
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootReducer;
