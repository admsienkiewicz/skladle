import React from 'react'
import Player from './Player'

const Formation = ({ formationSquad }) => {
    return (
        <div className="formation">
            {formationSquad.map((playerName, index) => {
                return <Player key={index} playerName={playerName}></Player>
            })}
        </div>
    )
}

export default Formation
