import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import dropTileReducer from './dropTileReducer';
import serviceStateReducer from './serviceStateReducer';
import greetingStateReducer from './greetingStateReducer';

const loggerMiddleware = createLogger();

export const initialState = {
  //represents board
  gameState: {
    userTurn : 1,
    board: [
      [],
      [],
      [],
      []
    ],
    first : 1
  },

  //service requires this format
  serviceState: {
    moves : [],
    isFetching : false,
    didInvalidate : false
  },

  //alert greeting/winner
  greetingState: {
    show : true,
    winner : ''
  }
};


const rootReducer = createStore(
  combineReducers({
    gameState: dropTileReducer,
    serviceState: serviceStateReducer,
    greetingState: greetingStateReducer
  }),
  initialState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

export default rootReducer;
