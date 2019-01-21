import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js';
import { recieveMovesService, sendMoveService } from './actions/index.js'

class App extends Component {
  render() {
    recieveMovesService();
    sendMoveService();
    const board = [];

    for(var y = 4; y > 0; y--) {
      const row = [];
      for(var x = 0; x < 4; x++) {
        //give each column a unique x identifier
        row.push(<Grid key={x} x={x} y={y} />);
      }
      //give each row unique y identifier
      board.push(<div key={y} className='row'>{row}</div>);
    }



    return (

      <div className="App">
        {board}
      </div>
    );
  }
}

export default App;
