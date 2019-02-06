import { initialState } from '../reducers';

function greetingStateReducer(state = initialState, action) {

  if(action.type === 'SHOW_GREETING') {
    var newState = {
      show : true,
      winner: state.winner
    }
    return newState
  }

  if(action.type === 'HIDE_GREETING') {
    var newState = {
      show : false,
      winner: state.winner
    }
    return newState
  }

  if(action.type === 'SET_WINNER') {
    var newState = {
      show: state.show,
      winner : action.payload
    }
    return newState
  }

  if(action.type === 'RETURN_TO_INITIAL_GREETING_STATE') {
    var newState = {
      show : state.show,
      winner : ''
    }
    return newState
  }

  return state;
}

export default greetingStateReducer
