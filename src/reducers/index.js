import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import dropTileReducer from './dropTileReducer';
import serviceStateReducer from './serviceStateReducer';
import greetingStateReducer from './greetingStateReducer';

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
    first : 1
  },

  serviceState: {
    moves : [],
    isFetching : false,
    didInvalidate : false
  },

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
