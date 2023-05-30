// import React, { useEffect, useState } from "react";
// import { userAccessToken, fetchUser } from "../utils/fetchDetails";
// import { useRouter } from "next/router";
// import { IoLogOut } from "react-icons/io5";
// import Navbar from "./navbar";
// import Head from "next/head";
// const index = () => {
//   const router = useRouter();
//   const [user, setUser] = useState(null);

//   // useEffect(() => {
//   //   const accessToken = userAccessToken();
//   //   if (!accessToken) return router.push("/login");
//   //   const [userInfo] = fetchUser();
//   //   console.log(userInfo);
//   //   setUser(userInfo);
//   // }, []);

//   // const logout = () => {
//   //   localStorage.clear();
//   //   router.push("/login");
//   // };

//   return (
//     <>
//     <Navbar/>
//     <br></br>
//     <br></br>
//     <br></br>
//     <Head>
//       <title>Home Page</title>
//     </Head>
    
//     {/* <div className="w-screen h-screen flex justify-center items-center bg-slate-100">
//       <div className="w-1/3 h-auto p-4 bg-white shadow-md rounded-md flex justify-start items-center relative">
//         <IoLogOut
//           fontSize={25}
//           className="absolute top-3 right-3 cursor-pointer text-gray-600"
//           onClick={logout}
//         />
//         <img src={user?.photoURL} className="rounded-md shadow-md" alt="" />
//         <p className="text-2xl font-sans font-semibold ml-2">
//           {user?.displayName}
//           <span className="block text-xs font-serif font-normal">
//             {user?.email}
//           </span>
//         </p>
//       </div>
//     </div> */}
//     </>
//   );
// };

// export default index;



// import axios from 'axios';
// import { userAccessToken, fetchUser } from "../utils/fetchDetails";
// import Navbar from "./navbar"
// import Link from "next/link";
// import { IoLogOut } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Nav from "./nav";
import Link from "next/link";
import moment from "moment";
import { IoLogOut } from "react-icons/io5";
import { HashLoader } from 'react-spinners';
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos} from "./redux/slice/homeApi";

import { fetchNextMatch} from "./redux/slice/homeNextMatch";
import { fetchNews} from "./redux/slice/homeNews";

// import NextMatch from "./nextMatch";
const Index = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
  
    console.log("State-------->", state);
  const lastMatch = state?.todo?.data?.matches&&state?.todo?.data?.matches[state?.todo?.data?.matches.length-1]
const lastNews = state?.nextMatche?.data?.response?.results.slice(-3)
  console.log("news",lastNews );
    useEffect(()=>{
        dispatch(fetchTodos())
    },[])

    useEffect(()=>{
        dispatch(fetchNextMatch())
    },[])

    useEffect(()=>{
        dispatch(fetchNews())
    },[])
    const handleLinkClick = () => {
      setIsLoading(true);
    };

    return (
<div>

<Head>
                 <meta charset="utf-8" />
    {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
    <link rel="icon" href="%PUBLIC_URL%/pngegg.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-next-app"
    />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&amp;display=swap" rel="stylesheet"/>

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
    <script src="js/main.js"></script>
      <title>football league</title>
    </Head>
        
        <div>
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
                <div className="hero overlay" style={{ backgroundImage: "url('https://i.ibb.co/5rhf0LL/bg-3.jpg')" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 ml-auto">
                                <h1 className="text-white">World Cup Event</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, molestias repudiandae pariatur.</p>
                             
                            </div>
                        </div>
                    </div>
                </div>




                <div class="container">


                    <div class="row">
                        <div class="col-lg-12">

                            <div class="d-flex team-vs">
                                <span class="score">{lastMatch?.score?.fullTime?.away}-{lastMatch?.score?.fullTime?.home}</span>
                                <div class="team-1 w-50">
                                    <div class="team-details w-100 text-center">
                                        <img src={lastMatch?.awayTeam?.crest}
                                         alt="Image" class="img-fluid" />
                                        <h3>{lastMatch?.awayTeam?.name} </h3>
                                       
                                    </div>
                                </div>
                                <div class="team-2 w-50">
                                    <div class="team-details w-100 text-center">
                                        <img src={lastMatch?.homeTeam?.crest} alt="Image" class="img-fluid" />
                                        <h3>{lastMatch?.homeTeam?.name} </h3>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="latest-news">
                    <div class="container" >
                        <div class="row" >
                            <div class="col-12 title-section" >
                                <h2 class="heading"> Latest News</h2>
                            </div>
                        </div>

                        <div class="row no-gutters">
                            <div class="col-md-4">

                     
{lastNews?.map((item)=>{
    return(
        <>
    
                                <div class="post-entry" style={{float:"left"}} >
                                    <a href="#">
                                    <img src={item.fields.thumbnail?item.fields.thumbnail:"https://themewagon.github.io/soccer/images/logo_1.png"} alt=""  />

                                     
                                    </a>
                                    <div class="caption">
                                        <div class="caption-inner">
                                            <h3 class="mb-3">{item.fields.headline}</h3>
                                            <div class="author d-flex align-items-center">
                                                <div class="img mb-2 mr-3">
                                                    <img src="https://themewagon.github.io/soccer/images/logo_1.png" alt="" />
                                                </div>
                                                <div class="text">
                                                    <h4>{item.fields.byline}</h4>
                                                    <span>{moment(item.fields.lastModified).format("MMM DD, YYYY")} &bullet; {item.fields.publication}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>

)
})}
                            </div>                       
                        </div>

                    </div>
                </div>

{/* here we put next match data */}
     {/* <NextMatch/> */}

     <div class="site-section bg-dark">
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="widget-next-match">
                <div class="widget-title">
                    <h3>Next Match</h3>
                </div>
                <div class="widget-body mb-3">
                    <div class="widget-vs">
                        <div class="d-flex align-items-center justify-content-around justify-content-between w-100">
                            <div class="team-1 text-center">
                                <img src="https://themewagon.github.io/soccer/images/logo_1.png" alt="Image" />
                                <h3>Football League</h3>
                            </div>
                            <div>
                                <span class="vs"><span>VS</span></span>
                            </div>
                            <div class="team-2 text-center">
                                <img src="https://themewagon.github.io/soccer/images/logo_1.png" alt="Image" />
                                <h3>Soccer</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center widget-vs-contents mb-4">
                    <h4>World Cup League</h4>
                    <p class="mb-5">
                        <span class="d-block">December 20th, 2020</span>
                        <span class="d-block">9:30 AM GMT+0</span>
                        <strong class="text-primary">New Euro Arena</strong>
                    </p>

                    <div id="date-countdown2" class="pb-1"></div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">

            <div class="widget-next-match">
                <table class="table custom-table">
                    <thead>
                        <tr>
                            <th>P</th>
                            <th>Team</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><strong class="text-white">Football League</strong></td>
                            <td>22</td>
                            <td>3</td>
                            <td>2</td>
                            <td>140</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><strong class="text-white">Soccer</strong></td>
                            <td>22</td>
                            <td>3</td>
                            <td>2</td>
                            <td>140</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><strong class="text-white">Juvendo</strong></td>
                            <td>22</td>
                            <td>3</td>
                            <td>2</td>
                            <td>140</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><strong class="text-white">French Football League</strong></td>
                            <td>22</td>
                            <td>3</td>
                            <td>2</td>
                            <td>140</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><strong class="text-white">Legia Abante</strong></td>
                            <td>22</td>
                            <td>3</td>
                            <td>2</td>
                            <td>140</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td><strong class="text-white">Gliwice League</strong></td>
                            <td>22</td>
                            <td>3</td>
                            <td>2</td>
                            <td>140</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td><strong class="text-white">Cornika</strong></td>
                            <td>22</td>
                            <td>3</td>
                            <td>2</td>
                            <td>140</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td><strong class="text-white">Gravity Smash</strong></td>
                            <td>22</td>
                            <td>3</td>
                            <td>2</td>
                            <td>140</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</div>
</div>



                <div class="container site-section">
                    <div class="row">
                        <div class="col-6 title-section">
                            <h2 class="heading">Our Blog</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="custom-media d-flex">
                                <div class="img mr-4">
                                    <img src="https://themewagon.github.io/soccer/images/logo_1.png" alt="Image" class="img-fluid" />
                                </div>
                                <div class="text">
                                    <span class="meta">May 20, 2020</span>
                                    <h3 class="mb-4"><a href="#">Romolu to stay at Real Nadrid?</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.</p>
                                    <p><a href="#">Read more</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="custom-media d-flex">
                                <div class="img mr-4">
                                    <img src="https://themewagon.github.io/soccer/images/logo_1.png" alt="Image" class="img-fluid" />
                                </div>
                                <div class="text">
                                    <span class="meta">May 20, 2020</span>
                                    <h3 class="mb-4"><a href="#">Romolu to stay at Real Nadrid?</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.</p>
                                    <p><a href="#">Read more</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <footer class="footer-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="widget mb-3">
                                    <h3>News</h3>
                                    <ul class="list-unstyled links">
                                        <li><a href="#">All</a></li>
                                        <li><a href="#">Club News</a></li>
                                        <li><a href="#">Media Center</a></li>
                                        <li><a href="#">Video</a></li>
                                        <li><a href="#">RSS</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="widget mb-3">
                                    <h3>Tickets</h3>
                                    <ul class="list-unstyled links">
                                        <li><a href="#">Online Ticket</a></li>
                                        <li><a href="#">Payment and Prices</a></li>
                                        <li><a href="#">Contact &amp; Booking</a></li>
                                        <li><a href="#">Tickets</a></li>
                                        <li><a href="#">Coupon</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="widget mb-3">
                                    <h3>Matches</h3>
                                    <ul class="list-unstyled links">
                                        <li><a href="#">Standings</a></li>
                                        <li><a href="#">World Cup</a></li>
                                        <li><a href="#">La Lega</a></li>
                                        <li><a href="#">Hyper Cup</a></li>
                                        <li><a href="#">World League</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-3">
                                <div class="widget mb-3">
                                    <h3>Social</h3>
                                    <ul class="list-unstyled links">
                                        <li><a href="#">Twitter</a></li>
                                        <li><a href="#">Facebook</a></li>
                                        <li><a href="#">Instagram</a></li>
                                        <li><a href="#">Youtube</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div class="row text-center">
                            <div class="col-md-12">
                                <div class=" pt-5">
                                    <p>

                                        Copyright &copy;
                                        <script>
                                            document.write(new Date().getFullYear());
                                        </script> All rights reserved | This template is made with <i class="icon-heart"
                                            aria-hidden="true"></i> by <a href="https://colorlib.com/" target="_blank">Colorlib</a>

                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>

            </div>
        </div>
</div>
    )
}

export default Index

