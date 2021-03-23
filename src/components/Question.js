import React from 'react';

const Question = [
    {
        question: 'if I were you, would you be me or you I be you?',
        options: [
            {option: 'wtf?', isCorrect: true},
            {option: 'I would be me, but also you.', isCorrect: false},
            {option: 'I... y-yes.', isCorrect: false},
            {option: 'thirteen', isCorrect: false}
        ]
    },
    {
        question: 'What is the sum of 3 + 4 * 2 / 1?', 
        options: [
            {option: '18', isCorrect: false},
            {option: '11', isCorrect: true},
            {option: '14', isCorrect: false},
            {option: '7', isCorrect: false}
        ]
    },
    {
        question: 'What is the color of SUN?', 
        options: [
            {option: 'red', isCorrect: false},
            {option: 'orange', isCorrect: false},
            {option: 'reddish orange', isCorrect: false},
            {option: 'yellow', isCorrect: true}
        ]
    },
    {
        question: 'Considering that the sky is blue and the earth is a square, what is my name?', 
        options: [
            {option: 'Juliana', isCorrect: false},
            {option: 'Shrek', isCorrect: false},
            {option: 'Oliver', isCorrect: false},
            {option: '>> GABRIEL JODAS <<', isCorrect: true}
        ]
    }
]

export default Question;