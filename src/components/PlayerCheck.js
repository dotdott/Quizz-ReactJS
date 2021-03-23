import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuestionsContext } from '../contexts/QuestionsContext';
import styles from '../styles/PlayerCheck.module.css';


const Player = () => {
    const {
        newGame,
        playerName,
        setPlayerName,
    } = useContext(QuestionsContext);

    return (
            <>
            {newGame ||
                <div className={styles.scoreSection}>
                    <h1>Quizz</h1>

                    <label htmlFor="name">Type a name to save you'r score</label>
                    <input 
                        type="text" 
                        value={playerName} 
                        onChange={e => setPlayerName(e.target.value)}  
                        placeholder="name/nickname" 
                        id="name"   
                    />
                    <div className={styles.playerButtons}>
                        <Link to="/Quizz-ReactJS/Leaderboard">
                            <button className="board-btn">
                            Leaderboard
                            </button>
                        </Link>

                        <Link to="/Quizz-ReactJS/QuizzGame">
                            <button className="play-again">Start</button>
                        </Link>
                    </div>
                </div> 
            }

            </>
    ) 
}

export default Player