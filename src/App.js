import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Leaderboard from './components/Leaderboard';
import Player from './components/PlayerCheck';
import Questions from './components/Questions';
import { QuestionsProvider } from './contexts/QuestionsContext';

function App() {

  return (
    <QuestionsProvider>
      <Router>
        <div className="App">
          <div className="quizz-container">

            <Route path="/Quizz-ReactJS/Leaderboard" component={Leaderboard}/>
            <Route exact path="/Quizz-ReactJS/" component={Player}/>
            <Route path="/Quizz-ReactJS/QuizzGame" component={Questions} />

          </div>
        </div>
      </Router>
    </QuestionsProvider>
  );
}

export default App;
