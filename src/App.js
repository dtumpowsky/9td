import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js';
import logo from './assets/logo.png'


class App extends Component {
  render() {

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
        <div className='sidebar'>
          <p>Player</p>
          <p>Computer</p>
        </div>
        <div className = 'logo'>
          <img src={logo}/>
          <p className= 'title'>Drop Tile</p>
        </div>
        <div className='board-container'>
          {board}
        </div>

      </div>
    );
  }
}

export default App;
