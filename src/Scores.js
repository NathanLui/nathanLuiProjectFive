import React, { Component } from 'react';
import firebase from './firebase.js';

export default class Scores extends Component {
    constructor() {
        super();
        this.state = {
            scores: []
        }
    }

    
    handleScore(e) {
        e.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(this.state.scores);
        this.setState({score: this.props.savedScore})
    }

    render() {
        return (
            <div>
            <button onClick={this.handleScore}>Save your score!</button>
            <ul>
                {this.state.scores.map((score) => {
                    return (
                            <li>
                            Top Scores: {score}
                            </li>
                
                    )
                })}
            </ul>
            </div>
        )
    }
    componentDidMount() {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {
            const newState = [];
            const data = response.val();
            
            for (let key in data) {
                newState.push(data[key]);
            }
            this.setState({
                scores: newState
            });
        });
    }
}