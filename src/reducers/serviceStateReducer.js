import { initialState } from '../reducers';
// import { sendMoveService } from '../actions'


function serviceStateReducer(state = initialState, action) {

  if(action.type === 'UPDATE_FROM_SERVICE'){
      return action.payload;
  }

  if(action.type === 'REQUEST_MOVE') {

    var newState = Object.assign({}, state, {
      isFetching: true
    })
    return newState
  }

  if(action.type === 'RECEIVE_MOVE') {
    var newState = Object.assign({}, state, {
      moves: action.payload,
      isFetching: false,
      didInvalidate: false
    })
    return newState
  }

  if(action.type === 'RECEIVE_MOVE_ERROR') {
    var newState = Object.assign({}, state, {
      didInvalidate: true
    })
    return newState
  }


  return state;
}

export default serviceStateReducer;
