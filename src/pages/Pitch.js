import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import Formation from '../components/Formation'
import { convertToLatinLetters } from '../assets/defaults'
import './Pitch.css'

const Pitch = () => {
    const { lineupData } = useContext(AppContext)

    const splitToFormations = () => {
        const formations = [1, ...lineupData.formation.split('-')]
        const starters = lineupData.startXI.map((starer) => {
            const name = starer.player.name.split('. ')
            if (name.length > 1) return convertToLatinLetters(name[1])
            return convertToLatinLetters(name[0])
        })
        let i = 0
        let squad = formations.map((line) => {
            let lineSquad = []
            while (lineSquad.length < line) {
                lineSquad = [...lineSquad, starters[i]]
                i++
            }
            return lineSquad
        })
        return squad
    }

    return (
        <div className="pitch">
            {splitToFormations().map((formation, index) => {
                return <Formation key={index} formationSquad={formation}></Formation>
            })}
        </div>
    )
}

export default Pitch
