import fetch from 'isomorphic-fetch';

//user clicks column
export function dropTile(column) {
  return {
    type: 'DROP_TILE',
    payload: column
  }
}

export function addMove(column) {
  return {
    type: 'ADD_MOVE',
    payload: column
  }
}

export function sendMoveService(moves) {
  return {
    type: 'UPDATE_FROM_SERVICE',
    payload: moves
  }
}
