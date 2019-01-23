import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js';
import { recieveMovesService, sendMoveService } from './actions/index.js'

class App extends Component {
  render() {
    recieveMovesService();
    sendMoveService();
    var board = [];

    for(var y = 3; y >= 0; y--) {
      var row = [];
      for(var x = 0; x <= 3; x++) {
        //give each column a unique x identifier
        row.push(<Grid key={x} x={x} y={y} />);
      }
      //give each row unique y identifier
      board.push(<div key={y} className='row'>{row}</div>);
    }



    return (

      <div className="App">
      <h2> 98point6 </h2>
        {board}
      </div>
    );
  }
}

export default App;
