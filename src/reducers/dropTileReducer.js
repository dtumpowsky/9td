import constants from './../constants';
const { initialState } = constants;

//sending payload to store
function dropTileReducer(state = initialState, action) {
  if(action.type === 'DROP_TILE') {
    console.log('dropping tile onto' + JSON.stringify(action.payload));
  }
  return state;
}

export default dropTileReducer;
