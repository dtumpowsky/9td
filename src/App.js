import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js';
import logo from './assets/logo.png';
import Greeting from './components/Greeting.js';


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
      <Greeting />
        <div className = 'logo'>
          <img src={logo}/>
          <p className= 'title'>Drop Tile</p>
        </div>


        <div className='board-container'>
          {board}
          <div className='sidebar'>
            <div className='legend user'>
              <p>User</p>
              <div className='legend user icon'></div>
            </div>
            <div className='legend comp'>
              <p>CPU</p>
              <div className='legend comp icon'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
