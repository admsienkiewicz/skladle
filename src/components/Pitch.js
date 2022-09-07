import React from 'react'
import { useState } from 'react'
import Formation from './Formation'
import Player from './Player'

const Pitch = ({ formations }) => {
    const [loadPitchImg, setLoadPitchImg] = useState(false)

    useEffect(() => {
        setTimeout(() => {}, 1000)
    }, [])
    return (
        <div className="pitch">
            {formations.map((formation, index) => {
                return <Formation key={index} formationSquad={formation}></Formation>
            })}
        </div>
    )
}

export default Pitch
