import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import Scores from './Scores.js'

import Title from './Title.js'
import Game from './Game.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      wordList: [
        {
          word: 'React',
          seen: false
        },
        {
          word: 'Firebase',
          seen: false
        },
        {
          word: 'Element',
          seen: false
        },
        {
          word: 'Semantic',
          seen: false
        },
        {
          word: 'Javascript',
          seen: false
        },
        {
          word: 'Developer',
          seen: false
        },
        {
          word: 'Property',
          seen: false
        },
        {
          word: 'Function',
          seen: false
        },
        {
          word: 'Document',
          seen: false
        },
        {
          word: 'Responsive',
          seen: false
        },
        {
          word: 'Wirefame',
          seen: false
        },
        {
          word: 'Front-end',
          seen: false
        },
        {
          word: 'Back-end',
          seen: false
        },
        {
          word: 'Domain',
          seen: false
        },
        {
          word: 'Designer',
          seen: false
        },
        {
          word: 'Typography',
          seen: false
        }
      ],
      displayedWord: ['Test Your Memory!'],
      score: 0,
      lives: 3,
    }
  }

  handleClickNew = e => { 
    e.preventDefault();
    const randoWord = Math.floor(Math.random() * this.state.wordList.length);
    const newState = [];
    newState.push(this.state.wordList[randoWord].word, this.state.wordList[randoWord].seen)
   
    if (this.state.wordList[randoWord].seen === false) {
      this.state.wordList[randoWord].seen = true
      this.setState({
        score: this.state.score +1,
      })
    }

    else if (this.state.wordList[randoWord].seen === true) {
      this.setState({
         lives: this.state.lives -1
      }) 
    }
      if (this.state.lives < 2) {
        alert('Gameover!')
        window.location.reload();  
      } 
      this.setState({
      displayedWord: newState,
    });
  }

  handleClickSeen = e => {
    e.preventDefault();
    const randoWord = Math.floor(Math.random() * this.state.wordList.length);
    const newState = [];
    newState.push(this.state.wordList[randoWord].word, this.state.wordList[randoWord].seen) 
   
    if (this.state.wordList[randoWord].seen === true) {
      this.setState({
        score: this.state.score + 1
      })
    }
    else if (this.state.wordList[randoWord].seen === false) {
      this.setState({
        lives: this.state.lives - 1
      })
    }
      if (this.state.lives < 2) {
        alert('Gameover!')
        window.location.reload();
      } 
      this.setState({
      displayedWord: newState
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Game />
          <Title />
        </header>
          <div className="stats">
            <h3 className="score">Score: {this.state.score}</h3>
            <h3 className="lives">Lives: {this.state.lives}</h3>
          </div>
          <p className="displayedWord">{this.state.displayedWord}</p>
          
          <button onClick={this.handleClickSeen}>Seen</button>
          <button onClick={this.handleClickNew}>New</button>
          <Scores savedScores={this.state.score}/>
      </div>
    );
  }
}

export default App;
    





