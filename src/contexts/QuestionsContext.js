import { createContext, useState } from "react";
import Question from '../components/Question';

export const QuestionsContext = createContext({});

export function QuestionsProvider({children}){
    const [LoopQuestions, setLoopQuestions] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [playerName, setPlayerName] = useState('');

    const [players, setPlayers] = useState([]);
  
    const [score, setScore] = useState(0);
  
    const [newGame, setNewGame] = useState(false);
  
  
    const updateLoopQuestion = (answer) => {
        if(answer === true){
            setScore(score + 1);
        } 
  
        if(LoopQuestions < Question.length - 1) {
            let updatedQuestion = LoopQuestions + 1;
            setLoopQuestions(updatedQuestion);
        } else {
            setShowScore(true);
        }
    }

    function resetValues() {
        setScore(0);
        setLoopQuestions(0);
        setNewGame(false);
        setPlayerName('');
        setShowScore(false);
    }

    return(
        <QuestionsContext.Provider value={{
                LoopQuestions,
                setLoopQuestions,
                showScore,
                setShowScore,
                score,
                setScore,
                updateLoopQuestion,
                newGame,
                setNewGame,
                playerName,
                setPlayerName,
                players,
                setPlayers,
                resetValues
        }}>
            {children}
        </QuestionsContext.Provider>
    )
}