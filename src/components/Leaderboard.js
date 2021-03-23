import Axios from 'axios';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QuestionsContext } from '../contexts/QuestionsContext';
import styles from '../styles/Leaderboard.module.css';


const Leaderboard = () => {
    const { players, resetValues, setPlayers } = useContext(QuestionsContext);

    useEffect(() => {
        Axios.get('https://quizz-app-heroku.herokuapp.com/quizz/get')
        .then(result => {
          setPlayers(result.data)
        })
    }, [])

    const rankings = players.map(player => (
        <div key={player.score} className={styles.player}>
            <p>{player.name}</p>
            <span>{player.score}</span>
        </div>
    ))

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
            Leaderboard
            <img src="./crown-solid.svg" alt="crown symbol" />
            </h1>

            <div className={styles.rankings}>

                <div className={styles.player}>
                    <p className={styles.playerBoard}>Player</p>
                    <span className={styles.playerScore}>Score</span>
                </div>

                {rankings}
            </div>

            <Link to="/Quizz-ReactJS/">
            <button onClick={() => resetValues()} className="play-again"> Play again </button>
            </Link>
        </div>
    )
}

export default Leaderboard;