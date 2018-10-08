import React, { Component } from 'react';
import Rituals from './Rituals';
import Calendar from './Calendar';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Ritual App</h2>
        </header>
        <div>
          <Calendar />
        </div>
        <main>
          <Rituals />
        </main>
      </div>
    );
  }
}

export default App;
