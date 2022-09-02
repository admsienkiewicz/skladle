import React, { useContext } from 'react'
import { PlayerContext } from './Player'

const Letter = ({ letterPosition, attemptVal }) => {
    const { board, answerWord, currAttempt } = useContext(PlayerContext)
    const letter = board[attemptVal][letterPosition]
    const correct = answerWord.toUpperCase()[letterPosition] === letter
    const almost = !correct && answerWord.toUpperCase().includes(letter)
    const letterState = (currAttempt.attempt > attemptVal && (correct ? 'correct' : almost ? 'almost' : 'error')) || ''

    return (
        <div className="letter" id={letterState}>
            {letter}
        </div>
    )
}

export default Letter
