import React, { Component } from 'react';
import Rituals from './Rituals';
import Calendar from 'react-calendar';
import '../App.css';

class App extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Ritual App</h2>
        </header>
        <div className="Calendar">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
        <main>
          <Rituals />
        </main>
      </div>
    );
  }
}

export default App;
