import fetch from 'cross-fetch';


//user clicks column
export function dropTile(column) {
  return {
    type: 'DROP_TILE',
    payload: column
  }
}

export function sendMoveService(moves) {
  return {
    type: 'UPDATE_FROM_SERVICE',
    payload: moves
  }
}

//give move ansync
export function requestMove() {
  return {
    type: 'REQUEST_MOVE'
  }
}

//success
export function receiveMove(response) {
  return {
    type: 'RECEIVE_MOVE',
    payload: response
  }
}

//erro
export function receiveMoveError(error) {
  return {
    type: 'RECEIVE_MOVE_ERROR',
    payload: error
  }
}

export function switchColor() {
  return {
    type: 'SWITCH_COLOR'
  }
}

export function fetchMove(move, prevMoves) {

  var moves = prevMoves.push(move);

  return function(dispatch) {

    dispatch(requestMove())

    console.log('moves:' + moves)

    return fetch('https://w0ayb2ph1k.execute-api.us-west-2.amazonaws.com/production?moves=[' + moves + ']', {
      method: 'GET'
    }).then(response => response.json())
    .then(json => {
        console.log('returned json: ' + json);

        dispatch(receiveMove(json))

        dispatch(dropTile(json.pop()))

    });
  }
}
