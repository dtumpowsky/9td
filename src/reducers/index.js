import { combineReducers } from 'redux';
import dropTileReducer from './dropTileReducer';

const rootReducer = combineReducers({
  userDropTile: dropTileReducer,
});

export default rootReducer;
