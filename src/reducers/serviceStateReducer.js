import { initialState } from '../reducers';
import { sendMoveService } from '../actions'

//sending payload to store
function serviceStateReducer(state = initialState, action) {

  if(action.type === 'ADD_MOVE') {
    var serviceStateCopy = state.slice();
    serviceStateCopy.push(action.payload);

    console.log('service: ' + serviceStateCopy)

    return serviceStateCopy;
  }
  
  if(action.type === 'UPDATE_FROM_SERVICE')
  {
      return action.payload;
  }
  return state;
}

export default serviceStateReducer;
