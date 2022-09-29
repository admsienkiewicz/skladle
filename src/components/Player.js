import React, { useContext, useState, useEffect } from 'react'
import Board from './Board'
import Keyboard from './Keyboard'
import { createContext } from 'react'
import { defaultBoard } from '../assets/defaults'
import { AppContext } from '../App'
import './Player.css'
import { useNavigate } from 'react-router-dom'

export const PlayerContext = createContext()

function Player({ playerName }) {
    const answerWord = playerName
    const numberOfLetters = answerWord.length
    const [board, setBoard] = useState(defaultBoard(numberOfLetters))
    const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPosition: 0 })
    const [modalOpen, setModalOpen] = useState(false)
    const [playerGuessState, setPlayerGuessState] = useState({ correctAnswer: false, gameOver: false })
    const { fixtureData, gameState, setGameState, setCorrectAnswersCounter, correctAnswersCounter } =
        useContext(AppContext)
    const navigate = useNavigate()

    const checkIfCorrectName = () => {
        const { attempt } = currAttempt
        const guessedName = board[attempt].join('')
        return guessedName.toLowerCase() === answerWord.toLowerCase()
    }
    const enterClick = () => {
        const { letterPosition } = currAttempt
        if (playerGuessState.correctAnswer) {
            setModalOpen(false)
            return
        }
        if (letterPosition !== numberOfLetters) return
        setCurrAttempt({ ...currAttempt, attempt: currAttempt.attempt + 1, letterPosition: 0 })
        if (checkIfCorrectName()) {
            setPlayerGuessState({ ...playerGuessState, correctAnswer: true })
            setCorrectAnswersCounter((prev) => prev + 1)
            return
        }
        if (currAttempt.attempt > 4) {
            setPlayerGuessState({ ...playerGuessState, gameOver: true })
            setGameState({ ...gameState, gameOver: true })
            navigate('/endGame')
        }
    }
    const deleteClick = () => {
        const currBoard = [...board]
        const { attempt, letterPosition } = currAttempt
        if (letterPosition === 0) return
        const prevLetter = letterPosition - 1
        currBoard[attempt][prevLetter] = ''
        setBoard(currBoard)
        setCurrAttempt({ ...currAttempt, letterPosition: prevLetter })
    }
    const letterClick = (keyVal) => {
        if (playerGuessState.correctAnswer || playerGuessState.gameOver) return
        const currBoard = [...board]
        const { attempt, letterPosition } = currAttempt
        if (currAttempt.letterPosition > numberOfLetters - 1) return
        currBoard[attempt][letterPosition] = keyVal
        setBoard(currBoard)
        setCurrAttempt({ ...currAttempt, letterPosition: currAttempt.letterPosition + 1 })
    }
    useEffect(() => {
        if (correctAnswersCounter === 11) {
            setGameState({ ...gameState, win: true, gameOver: true })
            navigate('/endGame')
        }
    }, [correctAnswersCounter, gameState])

    return (
        <>
            <div className="player-box">
                <div className="player-shirt" onClick={() => setModalOpen((prev) => !prev)}>
                    <img src={fixtureData.teams.home.logo} width="40%" height="40%" alt="teamlogo" />
                </div>
                {playerGuessState.correctAnswer ? (
                    <h4 top="50%">{playerName}</h4>
                ) : (
                    <h3>{'*'.repeat(playerName.length)}</h3>
                )}
            </div>
            <PlayerContext.Provider
                value={{
                    board,
                    setBoard,
                    currAttempt,
                    setCurrAttempt,
                    numberOfLetters,
                    letterClick,
                    deleteClick,
                    enterClick,
                    answerWord,
                    setModalOpen,
                }}
            >
                {modalOpen && (
                    <div className="overlay">
                        <div className="game">
                            <div className="header-game">
                                <h1>Zgadnij nazwisko zawodnika</h1>
                                <div className="close" onClick={() => setModalOpen(false)}></div>
                            </div>
                            <Board></Board>
                            <Keyboard></Keyboard>
                        </div>
                    </div>
                )}
            </PlayerContext.Provider>
        </>
    )
}

export default Player
