import React, { useState, useEffect } from 'react';
import pointSty from "../styles/point.module.css"
function PointsTable() {
    const [matches, setMatches] = useState([]);
    const [selectedLeague, setSelectedLeague] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [showTable, setShowTable] = useState(false); // Added showTable state

    const API_KEY = '7af60be1a4ac4eb6dd9bcd6105a3edcb';

    const leagues = [
        { id: '39', name: 'Premier League' },
        { id: '140', name: 'La-Liga' },
        { id: '78', name: 'Bundesliga' },
        { id: '135', name: 'Serie A' },
        { id: '61', name: 'Ligue 1' },
        // Add more leagues as needed
    ];

    const years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
    // Add more years as needed

    useEffect(() => {
        if (selectedLeague && selectedYear) {
            const fetchData = async () => {
                try {
                    const response = await fetch(`https://v3.football.api-sports.io/standings?league=${selectedLeague}&season=${selectedYear}`, {
                        headers: {
                            'x-rapidapi-host': 'v3.football.api-sports.io',
                            'x-rapidapi-key': API_KEY
                        },
                        mode: 'cors'
                    });

                    const data = await response.json();

                    if (response.ok) {
                        setMatches(data.response[0].league.standings[0]);
                        setShowTable(true); // Show the table
                    } else {
                        // <h3>....Loading</h3>
                        console.error('Failed to fetch data:', data);
                    }
                } catch (error) {
                    // <h3>....Loadiing</h3>

                    console.error('Error:', error);
                }
            };

            fetchData();
        }
    }, [selectedLeague, selectedYear]);

    const handleLeagueChange = (event) => {
        setSelectedLeague(event.target.value);
        setShowTable(false); // Hide the table when league changes
    };

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
        setShowTable(false); // Hide the table when year changes
    };

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="league" style={{ marginRight: '10px' }}>Select League:</label>
                <select id="league" value={selectedLeague} onChange={handleLeagueChange} style={{ padding: '5px' }}>
                    <option value="">Select a league</option>
                    {leagues.map((league) => (
                        <option key={league.id} value={league.id}>{league.name}</option>
                    ))}
                </select>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="year" style={{ marginRight: '10px' }}>Select Year:</label>
                <select id="year" value={selectedYear} onChange={handleYearChange} style={{ padding: '5px' }}>
                    <option value="">Select a year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>

            {showTable && ( // Render the main1 div only when showTable is true
                <div className={pointSty.main1}>
                    {/* <div className={`${pointSty.main2} ${pointSty.table-responsive}`}> */}
                    <div className={pointSty.main2}>
                        <center>
                        <h2 className={pointSty.h22}>{leagues.find(league => league.id === selectedLeague)?.name}</h2>
                            <p className={pointSty.pt}>POINTS TABLE {selectedYear}</p>
                            <table className={pointSty.table}>
                                <thead className={pointSty.theads}>
                                    <tr>
                                        <th>Pos.</th>
                                        <th className={pointSty.name}>CLUBS</th>
                                        <th>P</th>
                                        <th>W</th>
                                        <th>D</th>
                                        <th>L</th>
                                        <th>GD</th>
                                        <th>POINTS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {matches.map((match, index) => (
                                        <tr key={index} className={index < 4 ?'top' : ''}>
                                            <td style={{textAlign:"center"}}>{match.rank}</td>
                                            <td style={{textAlign:"center"}} className={pointSty.name}>
                                                <img className={pointSty.logo} src={match.team.logo} alt="logo" />&nbsp;&nbsp;
                                                {match.team.name}
                                            </td>
                                            <td style={{textAlign:"center"}}>{match.all.played}</td>
                                            <td style={{textAlign:"center"}}>{match.all.win}</td>
                                            <td style={{textAlign:"center"}}>{match.all.draw}</td>
                                            <td style={{textAlign:"center"}}>{match.all.lose}</td>
                                            <td style={{textAlign:"center"}}>{match.goalsDiff}</td>
                                            <td style={{textAlign:"center"}}>{match.points}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </center>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PointsTable;
