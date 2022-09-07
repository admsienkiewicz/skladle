import React, { useContext } from 'react'
import ReactLoading from 'react-loading'
import { AppContext } from '../App'

const ChallengeModal = () => {
    const { fixtureData, setGameState, selectRandomFixture, teamId, gameState } = useContext(AppContext)
    const teamName = teamId === 0 ? fixtureData.teams.home.name : fixtureData.teams.away.name
    const homeTeamLogo = fixtureData.teams.home.logo
    const awayTeamLogo = fixtureData.teams.away.logo
    const homeGoals = fixtureData.goals.home
    const awayGoals = fixtureData.goals.away
    const matchDay = new Date(fixtureData.fixture.date).toLocaleString('pl-PL')
    const city = fixtureData.fixture.venue.city
    const { loading } = gameState

    return (
        <div className="challange-modal">
            {loading ? (
                <ReactLoading type="spin" color="#000" className="loading"></ReactLoading>
            ) : (
                <>
                    <h1>Zgadnij</h1>
                    <div className="game-info">
                        <h2>Skład drużyny {teamName} w meczu:</h2>
                        <div className="matchup">
                            <div className="team-logo">
                                <img src={homeTeamLogo} alt="teamA logo" />
                            </div>
                            <div className="team-logo">
                                <img src={awayTeamLogo} alt="teamA logo" />
                            </div>
                        </div>
                        <div className="scorebox">
                            <div className="score">
                                <h1>{homeGoals}</h1>
                            </div>
                            <div className="score">
                                <h1>:</h1>
                            </div>
                            <div className="score">
                                <h1>{awayGoals}</h1>
                            </div>
                        </div>
                        <div className="date">
                            <h3>
                                {matchDay}, {city}
                            </h3>
                        </div>
                    </div>
                    <div className="options-box">
                        <div className="new-challange" onClick={() => selectRandomFixture()}>
                            Wylosuj inny mecz
                        </div>
                        <div
                            className="confirm-challange"
                            onClick={() => setGameState({ ...gameState, startGame: true })}
                        >
                            Ok, zaczynam
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ChallengeModal
