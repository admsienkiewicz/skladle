import React, { useContext } from 'react'
import { PlayerContext } from './Player'

const Key = ({ keyVal, bigKey }) => {
    const { letterClick, deleteClick, enterClick } = useContext(PlayerContext)
    const selectLetter = () => {
        if (keyVal === 'ENTER') {
            enterClick()
            return
        }
        if (keyVal === 'DELETE') {
            deleteClick()
            return
        }
        letterClick(keyVal)
    }
    return (
        <div className="key" id={bigKey && 'big'} onClick={selectLetter}>
            {keyVal}
        </div>
    )
}

export default Key
