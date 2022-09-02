import React, { useContext } from 'react'
import { PlayerContext } from './Player'
import Letter from './Letter'

const Board = () => {
    const { board } = useContext(PlayerContext)
    return (
        <div className="board">
            {board.map((_, attempt) => {
                return (
                    <div key={attempt} className="row">
                        {board[attempt].map((_, position) => {
                            return <Letter key={position} letterPosition={position} attemptVal={attempt}></Letter>
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Board
