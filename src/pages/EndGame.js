import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'

const EndGame = () => {
    const { win, setCorrectAnswersCounter, setGameState, defaultGameState } = useContext(AppContext)
    const navigate = useNavigate()
    return (
        <div className="challange-modal">
            <div className="end-message">{win ? <h1>Gratulacje, wygrałeś</h1> : <h1>Tym razem się nie udało</h1>}</div>
            <div
                className="confirm-challange"
                onClick={() => {
                    setCorrectAnswersCounter(0)
                    setGameState(defaultGameState)
                    navigate('/')
                }}
            >
                Jeszcz raz
            </div>
        </div>
    )
}

export default EndGame
