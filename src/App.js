import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      wordList: [],
      seen: false
    }
  }

  handleClickSeen = e => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const newState = [];
      const data = response.val();
      for (let randomWord in data) {
        newState.push(data[randomWord]);
      }
      this.setState({
        wordList: newState,
      });
      return (
        <p>{newState[Math.floor(Math.random() * newState.length)]}</p>
      )
    })
  }
    
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Verbal Memory Game!</h1>
          </header>
          <section> 
          {this.state.wordList.map((word) => {
              return ( 
                <p>{word[Math.floor(Math.random() * word.length)]}</p>
                )
            })}
            <button onClick={this.handleClickSeen}>Seen</button>
            <button>New</button>
          </section>
        </div>
      );
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
          wordList: newState,
        });
      });
    }
  }


export default App;
