import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { defaultFixture, defaultLineup } from './assets/defaults'
import ChallengeModal from './pages/ChallengeModal'
import Pitch from './pages/Pitch'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import EndGame from './pages/EndGame'

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

    return (
        <div className="app-container">
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
                    defaultGameState,
                }}
            >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ChallengeModal />} />
                        <Route path="/pitch" element={<Pitch />} />
                        <Route path="/endGame" element={<EndGame />} />
                    </Routes>
                </BrowserRouter>
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
        </div>
    )
}

export default App
