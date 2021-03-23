import Axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { QuestionsContext } from '../contexts/QuestionsContext';

import Question from './Question';
import styles from '../styles/Questions.module.css';

const Questions = () => {
        const {
            LoopQuestions, 
            showScore, 
            score, 
            updateLoopQuestion,
            playerName,
            resetValues
        } = useContext(QuestionsContext);

        const [saveWarning, setSaveWarning] = useState('');

        function saveScore(name,score){
            if(name !== ''){
                Axios.post('https://quizz-app-heroku.herokuapp.com/quizz/insert', {
                    name: name,
                    score: score
                })
                setSaveWarning("You'r score has been saved, check the leaderboard!")
            }
            setSaveWarning("You need to pass a name in order to save you'r score.")
        }

return (
    <>
    {showScore ? (
        <div className={styles.scoreSection}>
        <div className={styles.scoreResult}>
            <h2> <span>{playerName}</span> scored {score} out of {Question.length} </h2>
                <span className={styles.saveAlert}>{saveWarning}</span>
        </div>
                    <button onClick={() => saveScore(playerName, score)} className={styles.saveBtn}>
                        Save Score
                    </button>
                <Link to="/Quizz-ReactJS/Leaderboard">
                    <button className="board-btn">
                        Leaderboard
                    </button>
                </Link>

                <Link to="/Quizz-ReactJS/">
                    <button className="play-again" onClick={() => resetValues()}>Play Again</button>
                </Link>
        </div>
        ) : (
            <div className={styles.questions}>
            <h2>{Question[LoopQuestions].question}</h2>
    
                <div className={styles.options}>
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