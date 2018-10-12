import React, { Component } from 'react';
import App from './App';

class Rituals extends Component {

    render() {
        let listOfRituals = ["Wechseldusche", "No Trash", "weniger als 3 Kaffee", "No Juck", "Getup 530", "Gym", "Bike to work", "Fasten", "Morning Lemon", "No Sugar"];
        let listOfChallenges = ["Anki", "Gratitude", "Motivation Music or Video", "Clean Desk", "Urgency", "T1Tal", "be uncomfortable"];
    

        return (
            <div>
                <h1>My Rituals</h1>
                <h3>{JSON.stringify(this.props.value)}</h3>
                <h2>List of Rituals</h2>
                {listOfRituals.map(item => (<p>{item}</p>))}
                <h3>List of Challenges</h3>
                {listOfChallenges.map(item => (<p>{item}</p>))}
            </div>
            
        )
    }
}

export default Rituals;