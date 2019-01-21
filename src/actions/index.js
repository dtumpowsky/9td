import * as actionTypes from '../constants/ActionTypes.js';
import fetch from 'isomorphic-fetch';

//user clicks column
export function dropTile(column) {
  return {
    type: 'DROP_TILE',
    payload: column
  }
}

// export const initialState = {
//   moves: [];
// };

export function sendMoveService(moves) {
  fetch('https://w0ayb2ph1k.execute-api.us-west-2.amazonaws.com/production?moves=[2,3]', {
    method: 'POST',
    headers: {
      'moves': '[]'
    }
  }).then(response => response.json())
  .then(json => [
    console.log(json)
  ])
}

export function recieveMovesService(moves) {
  fetch('https://w0ayb2ph1k.execute-api.us-west-2.amazonaws.com/production?moves=[0,3]', {
    method: 'GET',
    headers: {
      'moves': '[]'
    }
  }).then(response => response.json())
  .then(json => [
    console.log(json)
  ])
}
