import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js';

class App extends Component {
  render() {
    const board = [];

    for(var y = 4; y > 0; y--) {
      const row = [];
      for(var x = 0; x < 4; x++) {
        row.push(<Grid x={x} y={y} />);
      }
      board.push(<div>{row}</div>);
    }
    return (

      <div className="App">
        {board}
      </div>
    );
  }
}

export default App;
