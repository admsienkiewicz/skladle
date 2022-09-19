import React, { createContext, useState } from 'react'
import './App.css'
import { defaultFixture, defaultLineup } from './assets/defaults'
import ChallengeModal from './components/ChallengeModal'
import Pitch from './components/Pitch'
import { useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

export const AppContext = createContext()
const axios = require('axios')
const defaultGameState = {
    startGame: false,
    loading: false,
    gameOver: false,
    win: false,
}

const App = () => {
    const [fixtureData, setFixtureData] = useState(defaultFixture)
    const [lineupData, setLineupData] = useState(defaultLineup)
    const [teamId, setTeamId] = useState(0)
    const [remainingApiRequests, setReamainingApiRequest] = useState(100)
    const [disableRequests, setDisableRequests] = useState(false)
    const [gameState, setGameState] = useState(defaultGameState)
    const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0)

    const getFixturesFromApi = async () => {
        console.log(process.env.REACT_APP_API_KEY)
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            params: { league: '106', season: '2020' },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            },
        }
        const response = await axios.request(options)
        return response.data.response
    }
    const getLineupByFixture = async (fixtureId) => {
        const whichTeam = Math.trunc(Math.random() * 2)
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures/lineups',
            params: { fixture: `${fixtureId}` },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            },
        }
        const response = await axios.request(options)
        setReamainingApiRequest(response.headers['x-ratelimit-requests-remaining'])
        return { lineup: response.data.response[whichTeam], teamId: whichTeam }
    }
    const selectRandomFixture = async () => {
        const fixturesArray = await getFixturesFromApi()
        if (remainingApiRequests < 1) {
            setDisableRequests(true)
            return
        }
        setDisableRequests(false)
        setGameState({ ...gameState, loading: true })
        const randomFixture = fixturesArray[Math.floor(Math.random() * fixturesArray.length)]
        const fixtureId = randomFixture.fixture.id
        const { lineup, teamId } = await getLineupByFixture(fixtureId)
        setTeamId(teamId)
        setFixtureData(randomFixture)
        setLineupData(lineup)
        setGameState({ ...gameState, loading: false })
    }

    useEffect(() => {
        if (correctAnswersCounter === 11) {
            setGameState({ ...gameState, win: true, gameOver: true })
        }
    }, [correctAnswersCounter, gameState])

    const { startGame, gameOver, win } = gameState
    const endGameScreen = (
        <div className="challange-modal">
            <div className="end-message">{win ? <h1>Gratulacje, wygrałeś</h1> : <h1>Tym razem się nie udało</h1>}</div>
            <div
                className="confirm-challange"
                onClick={() => {
                    setCorrectAnswersCounter(0)
                    setGameState(defaultGameState)
                }}
            >
                Jeszcz raz
            </div>
        </div>
    )
    const output = (gameOver && endGameScreen) || (!startGame ? <ChallengeModal></ChallengeModal> : <Pitch></Pitch>)
    return (
        <>
            <header>Ekstraklasowe 11-tki</header>
            <AppContext.Provider
                value={{
                    setGameState,
                    fixtureData,
                    lineupData,
                    teamId,
                    selectRandomFixture,
                    gameState,
                    disableRequests,
                    correctAnswersCounter,
                    setCorrectAnswersCounter,
                }}
            >
                {output}
            </AppContext.Provider>
            <footer>
                Adam Sienkiewicz @2022
                <a href="https://github.com/admsienkiewicz">
                    <AiFillGithub className="footer-icon" />
                </a>
                <a href="https://www.linkedin.com/in/adam-sienkiewicz-0429a2214/">
                    <AiFillLinkedin className="footer-icon" />
                </a>
            </footer>
        </>
    )
}

export default App
