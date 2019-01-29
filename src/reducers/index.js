import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import dropTileReducer from './dropTileReducer';
import serviceStateReducer from './serviceStateReducer';

const loggerMiddleware = createLogger();

export const initialState = {
  gameState: {
    userTurn : 1,
    board: [
      [],
      [],
      [],
      []
    ],
  },
  serviceState: {
    moves : [],
    isFetching : false,
    didInvalidate : false
  }
};


const rootReducer = createStore(
  combineReducers({
    gameState: dropTileReducer,
    serviceState: serviceStateReducer
  }),
  initialState,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default rootReducer;
