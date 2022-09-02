import React from 'react'
import Formation from './Formation'
import Player from './Player'

const Pitch = ({ formations }) => {
    return (
        <div className="pitch">
            {formations.map((formation, index) => {
                return <Formation key={index} formationSquad={formation}></Formation>
            })}
        </div>
    )
}

export default Pitch
