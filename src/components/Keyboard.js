import React, { useCallback, useEffect, useContext } from 'react'
import { PlayerContext } from './Player'
import Key from './Key'

const Keyboard = () => {
    const firstKeyRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const secondKeyRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const thirdKeyRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

    const { letterClick, deleteClick, enterClick, setModalOpen } = useContext(PlayerContext)

    const handleKeyboard = useCallback((event) => {
        if (event.key === 'Enter') {
            enterClick()
            return
        }
        if (event.key === 'Backspace') {
            deleteClick()
            return
        }
        if (event.key === 'Escape') {
            setModalOpen(false)
            return
        }
        const letterArray = [...firstKeyRow, ...secondKeyRow, ...thirdKeyRow]
        letterArray.forEach((letter) => {
            if (letter.toLowerCase() === event.key.toLowerCase()) {
                letterClick(letter)
            }
        })
    })
    useEffect(() => {
        document.addEventListener('keydown', handleKeyboard)
        return () => document.removeEventListener('keydown', handleKeyboard)
    }, [handleKeyboard])
    return (
        <div className="keyboard" onKeyDown={handleKeyboard}>
            <div className="line1">
                {firstKeyRow.map((keyLetter, index) => {
                    return <Key key={index} keyVal={keyLetter}></Key>
                })}
            </div>
            <div className="line2">
                {secondKeyRow.map((keyLetter, index) => {
                    return <Key key={index} keyVal={keyLetter}></Key>
                })}
            </div>
            <div className="line3">
                <Key keyVal={'ENTER'} bigKey={true}></Key>
                {thirdKeyRow.map((keyLetter, index) => {
                    return <Key key={index} keyVal={keyLetter}></Key>
                })}
                <Key keyVal={'DELETE'} bigKey={true}></Key>
            </div>
        </div>
    )
}

export default Keyboard
