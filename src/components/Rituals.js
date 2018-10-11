import React, { Component } from 'react';
import App from './App';

class Rituals extends Component {
    render() {
        return (
            <div>
                <h1>My Rituals</h1>
                <h3>{JSON.stringify(this.props.value)}</h3>
            </div>
            
        )
    }
}

export default Rituals;