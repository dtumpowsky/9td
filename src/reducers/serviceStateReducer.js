import { initialState } from '../reducers';
// import { sendMoveService } from '../actions'


function serviceStateReducer(state = initialState, action) {

  if(action.type === 'REQUEST_MOVE') {

    var newState = {
      moves: state.moves,
      didInvalidate: state.didInvalidate,
      isFetching: true
    }
    return newState
  }

  if(action.type === 'RECEIVE_MOVE') {
    var newState = {
      moves: action.payload,
      isFetching: false,
      didInvalidate: false
    }
    return newState
  }

  if(action.type === 'RECEIVE_MOVE_ERROR') {
    var newState = {
      moves: state.moves,
      isFetching: false,
      didInvalidate: true
    }
    return newState
  }

  if(action.type === 'RETURN_TO_INITIAL_SERVICE_STATE')
  {
    return {
      moves : [],
      isFetching : false,
      didInvalidate : false
    }
  }
  return state;
}


export default serviceStateReducer;
