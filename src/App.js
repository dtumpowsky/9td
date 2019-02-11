import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js';
import Greeting from './components/Greeting.js';
import { connect } from 'react-redux';


class App extends Component {
  render() {

    var board = [];

    // generates grid
    for(var y = 3; y >= 0; y--) {
      var row = [];
      for(var x = 0; x <= 3; x++) {
        row.push(<Grid key={x} x={x} y={y} />); //column
      }
      board.push(<div key={y} className='row'>{row}</div>); //row
    }


    var greeting;

    if(this.props.showGreeting === true ) {
      greeting = <Greeting />
    }

    return (


      <div className="App">

        {greeting}

        <div className = 'logo'>
          <h1 className = 'title'>Connect Four</h1>
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

const mapStateToProps = state => {
  return {
    showGreeting: state.greetingState.show
  }
}

export default connect(mapStateToProps)(App);
