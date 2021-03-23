import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QuestionsContext } from '../contexts/QuestionsContext';
import Question from './Question';
import Axios from 'axios';

const Questions = () => {
        const {
            LoopQuestions, 
            showScore, 
            score, 
            updateLoopQuestion,
            playerName,
            setPlayers,
            players,
            resetValues
        } = useContext(QuestionsContext);


        function saveScore(name,score){
             Axios.post('http://127.0.0.1:3333/quizz/insert', {
                name: name,
                score: score
             })
            // setPlayers([...players, {name: name, score: score}])
        }

return (
    <>
    {showScore ? (
        <div className="score-section">
            <h2> {playerName} scored {score} out of {Question.length} </h2>

                    <button onClick={() => saveScore(playerName, score)}>Save Score</button>
            <Link to="/Quizz-ReactJS/Leaderboard">
                    <button>Leaderboard</button>
                </Link>

                <Link to="/Quizz-ReactJS/">
                    <button className="play-again" onClick={() => resetValues()}>Play Again</button>
                </Link>
        </div>
        ) : (
            <div className="questions">
            <h2>{Question[LoopQuestions].question}</h2>
    
                <div className="options">
                    {Question[LoopQuestions].options.map(question => {
                        return (
                        <a href='#'
                            onClick={() => updateLoopQuestion(question.isCorrect)}
                            className="question-option" 
                            key={question.option}

                        >
                            {question.option}
                        </a>
                        )}
                    )}
                </div>
            </div>
        )}
    </>
    );
}

export default Questions;