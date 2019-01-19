import * as actionTypes from './../constants/ActionTypes';

//user clicks column
export function dropTile(columnSelection) {
  type: DROP_TILE,
  payload: columnSelection
}
