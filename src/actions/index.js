import fetch from 'cross-fetch';
import store from '../reducers';


//DROP TILE REDUCER

export function dropTile(column) {
  return {
    type: 'DROP_TILE',
    payload: column
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

//error
export function receiveMoveError(error) {
  return {
    type: 'RECEIVE_MOVE_ERROR',
    payload: error
  }
}

//who will go first
export function switchColor() {
  return {
    type: 'SWITCH_COLOR'
  }
}


export function returnToInitialGameState() {
  return {
    type: 'RETURN_TO_INITIAL_GAME_STATE'
  }
}

export function returnToInitialServiceState() {
  return {
    type: 'RETURN_TO_INITIAL_SERVICE_STATE'
  }
}

export function returnToInitialGreetingState() {
  return {
    type: 'RETURN_TO_INITIAL_GREETING_STATE'
  }
}

//GREEETING REDUCER

export function showGreeting() {
  return {
    type: 'SHOW_GREETING'
  }
}

export function hideGreeting() {
  return {
    type: 'HIDE_GREETING'
  }
}

export function setWinner(winner) {
  return {
    type: 'SET_WINNER',
    payload: winner
  }
}

export function checkWinner() {

  var board = store.getState().gameState.board

  if(
    //vertical win
    (board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1 && board[0][3] === 1) ||
    (board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1 && board[1][3] === 1) ||
    (board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1 && board[2][3] === 1) ||
    (board[3][0] === 1 && board[3][1] === 1 && board[3][2] === 1 && board[3][3] === 1) ||
    //horizontal win
    (board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1 && board[3][0] === 1) ||
    (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1 && board[3][1] === 1) ||
    (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1 && board[3][2] === 1) ||
    (board[0][3] === 1 && board[1][3] === 1 && board[2][3] === 1 && board[3][3] === 1) ||
    //diagonal win
    (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1 && board[3][3] === 1) ||
    (board[3][0] === 1 && board[2][1] === 1 && board[1][2] === 1 && board[0][3] === 1)
  ){
    return 'User'

  } else if (
    (board[0][0] === 2 && board[0][1] === 2 && board[0][2] === 2 && board[0][3] === 2) ||
    (board[1][0] === 2 && board[1][1] === 2 && board[1][2] === 2 && board[1][3] === 2) ||
    (board[2][0] === 2 && board[2][1] === 2 && board[2][2] === 2 && board[2][3] === 2) ||
    (board[3][0] === 2 && board[3][1] === 2 && board[3][2] === 2 && board[3][3] === 2) ||

    (board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2 && board[3][0] === 2) ||
    (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2 && board[3][1] === 2) ||
    (board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2 && board[3][2] === 2) ||
    (board[0][3] === 2 && board[1][3] === 2 && board[2][3] === 2 && board[3][3] === 2) ||

    (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2 && board[3][3] === 2) ||
    (board[3][0] === 2 && board[2][1] === 2 && board[1][2] === 2 && board[0][3] === 2)
  ){
    return 'CPU'
  } else if(
    board[0].length >= 4 && board[1].length >= 4  && board[2].length >= 4  && board[3].length >= 4)
  {
    return 'Draw'
  }
  return null
}

export function playerMove(column) {
  return function(dispatch) {
    dispatch(dropTile(column))

    var winner = checkWinner();

    if(winner) {
      dispatch(setWinner(winner))
      dispatch(showGreeting())
    }
  }
}

//service call
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

        var winner = checkWinner();

        if(winner) {
          dispatch(setWinner(winner))
          dispatch(showGreeting())
        }
    });
  }
}
