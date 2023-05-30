import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import Head from 'next/head';
import Nav from "./nav";
import Footer from "./footer";
import $ from 'jquery';
import { HashLoader } from 'react-spinners';

const override = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Players = () => {

    const [playerData, setPlayerData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLinkClick = () => {
        setIsLoading(true);
      };
    const handleSearch = () => {
        setIsLoading(true);
        fetch(`https://v3.football.api-sports.io/players?search=${searchQuery}&season=2021&league=2`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-rapidapi-key': '7af60be1a4ac4eb6dd9bcd6105a3edcb',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.response.length > 0) {
                    const playerId = data.response[0].player.id;
                    fetch(`https://v3.football.api-sports.io/players?id=${playerId}&season=2021`, {
                        method: 'GET',
                        headers: {
                            'x-rapidapi-host': 'v3.football.api-sports.io',
                            'x-rapidapi-key': '7af60be1a4ac4eb6dd9bcd6105a3edcb',
                        },
                    })
                        .then((response) => response.json())
                        .then((playerData) => {
                            setIsLoading(false);
                            setPlayerData(playerData.response[0]);
                        })
                        .catch((err) => {
                            console.log(err);
                            setIsLoading(false);
                        });
                } else {
                    setIsLoading(false);
                    setPlayerData(null);
                }
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };
    return (
        <div>

<Head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app"
    />
    {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&amp;display=swap" rel="stylesheet"/>

    <link rel="stylesheet" href="fonts/icomoon/style.css"/>
  
    <link rel="stylesheet" href="css/bootstrap/bootstrap.css"/>
    <link rel="stylesheet" href="css/jquery-ui.css"/>
    <link rel="stylesheet" href="css/owl.carousel.min.css"/>
    <link rel="stylesheet" href="css/owl.theme.default.min.css"/>
    <link rel="stylesheet" href="css/owl.theme.default.min.css"/>
  
    <link rel="stylesheet" href="css/jquery.fancybox.min.css"/>
  
    <link rel="stylesheet" href="css/bootstrap-datepicker.css"/>
  
    <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css"/>
  
    <link rel="stylesheet" href="css/aos.css"/>
  
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
 
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery-migrate-3.0.1.min.js"></script>
    <script src="js/jquery-ui.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.stellar.min.js"></script>
    <script src="js/jquery.countdown.min.js"></script>
    <script src="js/bootstrap-datepicker.min.js"></script>
    <script src="js/jquery.easing.1.3.js"></script>
    <script src="js/aos.js"></script>
    <script src="js/jquery.fancybox.min.js"></script>
    <script src="js/jquery.sticky.js"></script>
    <script src="js/jquery.mb.YTPlayer.min.js"></script>
    <script src="js/main.js"></script> */}
      <title>players Page</title>
    </Head>
    <Nav onLinkClick={handleLinkClick} />
      {isLoading && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 9999,
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10000,
            }}
          >
            <HashLoader color="#ffffff" size={50} />
          </div>
        </>
      )}
                  <div class="site-wrap">
                <div class="site-mobile-menu site-navbar-target">
                    <div class="site-mobile-menu-header">
                        <div class="site-mobile-menu-close">
                            <span class="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div class="site-mobile-menu-body"></div>
                </div>

                <header class="site-navbar py-4" role="banner">

                    <div class="container">
                        <div class="d-flex align-items-center">
                          
                            <div class="ml-auto">
                              

                                <a href="#" class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"><span
                                    class="icon-menu h3 text-white"></span></a>
                            </div>
                        </div>
                    </div>

                </header>
                <div className="hero overlay" style={{ backgroundImage: "url('https://i.ibb.co/5rhf0LL/bg-3.jpg')" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 ml-auto">
                                <h1 className="text-white">UCL And All Match Event</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, molestias repudiandae pariatur.</p>
                                {/* <div id="date-countdown"></div> */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by player name"
                        style={{
                            padding: '15px',
                            fontSize: '18px',
                            border: '2px solid #ccc',
                            borderRadius: '5px',
                            marginRight: '10px',
                            width: '400px',
                        }}
                    />
                    <button
                        onClick={handleSearch}
                        style={{
                            padding: '15px 30px',
                            fontSize: '18px',
                            backgroundColor: '#ee1e46',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Search
                    </button>
                </div>
                {isLoading ? (
                   <div className="loader-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                   <ClipLoader color="#ee1e46" css={override} size={50} />
                 </div>
                 
                ) : playerData && playerData.player ? (
                    <div className="player-page">
                        <div className="player-details">
                            <div className="player-image">
                                <img src={playerData?.player?.photo} alt={playerData?.player?.name} />
                            </div>
                            <div className="player-info">
                                <h1>{playerData?.player?.name}</h1>
                                <div className="player-details-row">
                                    <p><strong>Age:</strong> {playerData?.player?.age}</p>
                                    <p><strong>Nationality:</strong> {playerData?.player?.nationality}</p>
                                </div>
                                <div className="player-details-row">
                                    <p><strong>Height:</strong> {playerData?.player?.height}</p>
                                    <p><strong>Weight:</strong> {playerData?.player?.weight}</p>
                                </div>
                            </div>
                        </div>
                        <div className="player-stats">
                            <h2>Statistics</h2>
                            {playerData?.statistics?.map((stats, index) => (
                                <div className="stats-card" key={index}>
                                    <div className="stats-row">
                                        <p><strong>Team:</strong> {stats.team.name}</p>
                                        <p><strong>League:</strong> {stats.league.name}</p>
                                    </div>
                                    <div className="stats-row">
                                        <p><strong>Appearances:</strong> {stats.games.appearences}</p>
                                        <p><strong>Minutes:</strong> {stats.games.minutes}</p>
                                        <p><strong>Goals:</strong> {stats.goals.total}</p>
                                        <p><strong>Assists:</strong> {stats.goals.assists}</p>
                                    </div>
                                    <div className="stats-row">
                                        <p><strong>Yellow Cards:</strong> {stats.cards.yellow}</p>
                                        <p><strong>Red Cards:</strong> {stats.cards.red}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
        <style>{`
        .player-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        
        .player-details {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .player-image img {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 50%;
          margin-right: 20px;
        }
        
        .player-info h1 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        
        .player-details-row {
          display: flex;
          margin-bottom: 5px;
        }
        
        .player-details-row p {
          margin-right: 10px;
        }
        
        .player-stats {
          width: 100%;
        }
        
        .stats-card {
          background-color: #f4f4f4;
          padding: 10px;
          margin-bottom: 10px;
        }
        
        .stats-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
        }
        
        h2 {
          font-size: 20px;
          text-align: center;
           margin-bottom: 10px;}`
           }</style>
                    </div>
                ) : (
                    <div>No player data available.</div>
                )}
            </div>
            <Footer/>
        </div>
    )
}

export default Players
