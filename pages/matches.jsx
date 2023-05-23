import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Nav from "./nav";
import Points from "./points"
import Footer from "./footer";
import styles from '../styles/Matches.module.css'
import $ from 'jquery';
import { Card } from 'antd';
import tabStyle from "../styles/tab.module.css"
import moment from "moment";
import { HashLoader } from 'react-spinners';

export const getStaticProps = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetch("https://api.football-data.org/v4/competitions/2001/matches?status=FINISHED",
  {
    headers: {
      'X-Auth-Token': "7ead1931c28745ca86a312cbb8bbf328",
      'Content-Type': 'application/json'
  },
  });
  const data = await res.json();
  console.log("matches data", data);


  let currentDate = new Date();
  let startDate = currentDate.toISOString().slice(0, 10);
  let endDate = new Date(currentDate.getTime() + 10 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  // const res1 = await fetch("http://api.football-data.org/v2/matches?competitions=CL,PD,PL,BL1,SA,FL1&dateFrom=2023-05-12&dateTo=2023-05-22",
  const res1 = await fetch(`http://api.football-data.org/v2/matches?competitions=CL,PD,PL,BL1,SA,FL1&dateFrom=${startDate}&dateTo=${endDate}`,
  {
    headers: {
      'X-Auth-Token': "7ead1931c28745ca86a312cbb8bbf328",
      'Content-Type': 'application/json'
  },
  });
  const UpcommingData = await res1.json();
  // console.log("matches data", UpcommingData);

  return {
    props: {
      data,
      UpcommingData,
    },
  };
};


const matches = ({data,UpcommingData}) => {
  const [toggleState, setToggleState] = useState(1);
  const [renderData, setRenderData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(5);
  const [pa, setPa] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  console.log("matches data", pa);

  const handleLinkClick = () => {
    setIsLoading(true);
  };
  const toggleTab = (index) => {
    setToggleState(index);
  };
  useEffect(() => {
    const tabsNewAnim = $('#navbar-animmenu');
    const selectorNewAnim = $('#navbar-animmenu').find('li').length;
    const activeItemNewAnim = tabsNewAnim.find('.active');
    const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    const itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
        "left": itemPosNewAnimLeft.left + "px",
        "width": activeWidthNewAnimWidth + "px"
    });

    $("#navbar-animmenu").on("click", "li", function (e) {
        $('#navbar-animmenu ul li').removeClass("active");
        $(this).addClass('active');
        const activeWidthNewAnimWidth = $(this).innerWidth();
        const itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            "left": itemPosNewAnimLeft.left + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    
    })
  },[])

useEffect(()=>{
  setPa(data)
})

  useEffect(() => {
    if ( pageNumber && pageLimit) {
      const dataToRender = data.matches.slice(
        pageLimit * (pageNumber - 1),
        pageLimit * pageNumber
      );
      setRenderData(dataToRender);
    }
  }, [pageNumber, pageLimit]);


  const nextHandler = () => {
    setPageNumber((initialPageNumber) => initialPageNumber + 1);
  };

  const prevHandler = () => {
    if (pageNumber !== 1) {
      setPageNumber((initialPageNumber) => initialPageNumber - 1);
    }
  };

  const handlepageLimit = (e) => {
    setPageLimit(e.target.value);
  };
    return (
      <>
{/* {console.log("renderdata",renderData)}
{console.log("data",pa?.matches)} */}
{/* {console.log("upCommingdata",UpcommingData)} */}
   
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
      <title>Matche Page</title>
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
                <div className="hero overlay" style={{ backgroundImage: "url('https://i.ibb.co/5rhf0LL/bg-3.jpg')" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 ml-auto">
                                <h1 className="text-white">World Cup Event Match</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, molestias repudiandae pariatur.</p>
                             
                            </div>
                        </div>
                    </div>
{/* new dashboard */}
<div id="navbar-animmenu">
                        <ul class="show-dropdown main-navbar">
                            <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                            <li class="active" >
                                <a 
                                 className={toggleState === 1 ? "tabs active_tabs" : "tabs"}
                                 onClick={() => toggleTab(1)}
                                href="javascript:void(0);"><i class="fas fa-tachometer-alt"></i>All Matches</a>
                            </li>
                            <li >
                                <a 
                                className={toggleState === 2 ? "tabs active_tabs" : "tabs"}
                                onClick={() => toggleTab(2)}
                                href="javascript:void(0);"><i class="far fa-address-book"></i><b>Upcomming Matches</b></a>
                            </li>
                            <li >
                                <a
                                  className={toggleState === 3 ? "tabs active_tabs" : "tabs"}
                                  onClick={() => toggleTab(3)}
                                href="javascript:void(0);"><i class="far fa-clone"></i><b>Complete Matches</b></a>
                            </li>
                            <li >
                                <a
                                  className={toggleState === 4 ? "tabs active_tabs" : "tabs"}
                                  onClick={() => toggleTab(4)}
                                href="javascript:void(0);"><i class="far fa-calendar-alt"></i><b>Points Table</b></a>
                            </li>
                        </ul>

{/* conatner item */}

  </div>
                </div>


{/* conatiner card */}
<br></br>
<br></br>
<br></br>


<div className={tabStyle.content_tabs}>
        <div
          className={toggleState === 1 ? "content  active_content" : tabStyle.content}
        >
          <h2>Content 1</h2>
          <hr />
        
{renderData&&renderData?.map((item)=>{
{/* {data?.matches&&data?.matches?.slice(0,5).map((item)=>{ */}
  return(
    <>
                <Card
    title="."
    hoverable
    
    bordered={false}
    style={{
      width: 900,
      display:"Hidden",
      backgroundColor:"transparent",
      color:"transparent"
    }}
  >
  </Card>          
      <div class="container" >
          <div class="row">
              <div class="col-lg-12">
                  <div class="d-flex team-vs">
                      <span class="score">{item.score.fullTime.away}-{item.score.fullTime.home}</span>
                      <div class="team-1 w-50">
                          <div class="team-details w-100 text-center">
                              <img src={item.awayTeam.crest} alt="Image" class="img-fluid" style={{marginLeft:"180px"}} />
                              <h3>{item.awayTeam.name} </h3>
                         
                          </div>
                      </div>
                      <div class="team-2 w-50">
                          <div class="team-details w-100 text-center">
                              <img src={item.homeTeam.crest} alt="Image" class="img-fluid" style={{marginLeft:"180px"}}/>
                              <h3>{item.homeTeam.name} </h3>
                             
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
</>
  )})}

<div>
      <button onClick={prevHandler} disabled = {pageNumber ===1 ? true: false}>prev</button>
      <input value={pageNumber} disabled="true" />
      <button onClick={nextHandler}  disabled= {pageNumber ===(data.length/renderData.length) ? true: false}
>next
{/* {console.log('renderdata length',data.length/renderData.length)} */}
</button>
<br/>
      <label>page limit:</label>
      <input value={pageLimit} type="number" onChange={handlepageLimit} />
      </div>
          
        </div>

        <div
          className={toggleState === 2 ? "content  active_content" : tabStyle.content}
        >
          <h2>Content 2</h2>
          <hr />
          {UpcommingData&&UpcommingData?.matches.slice(0,10).map((upcomeItem)=>{
          
  return(
    <>
    {/* {console.log("hi data",upcomeItem)} */}
                <Card
    title="."
    hoverable
    
    bordered={false}
    style={{
      width: 900,
      display:"Hidden",
      backgroundColor:"transparent",
      color:"transparent"
    }}
  >
  </Card>          
      <div class="container" >
          <div class="row">
              <div class="col-lg-12">
                  <div class="d-flex team-vs">
                      <span class="score">
                        <img 
                        src = {upcomeItem.competition.area.ensignUrl}
                        alt ="avatar"
                        height="25px"
                        width="50px"
                        />

                        </span>
                              <p><span>{upcomeItem?.referees[0]?.role?upcomeItem?.referees[0]?.role:"REFEREE"}</span>:- {upcomeItem?.referees[0]?.name?upcomeItem?.referees[0]?.name:"not decided yet"}<br></br> <span>{moment(upcomeItem?.utcDate).format('MM DD YYYY , h:mm:ss a')}</span> </p>
                        <p style={{color:"red",padding:"5px"}}>{upcomeItem.competition.name}</p>
                      <div class="team-1 w-50">
                          <div class="team-details w-100 text-center">
                              <img src={upcomeItem.awayTeam.crest} alt="Image" class="img-fluid" />
                              <h3>{upcomeItem.awayTeam.name} </h3>
                         
                          </div>
                      </div>
                      <div class="team-2 w-50">
                          <div class="team-details w-100 text-center">
                              <img src={upcomeItem.homeTeam.crest} alt="Image" class="img-fluid" />
                              <h3>{upcomeItem.homeTeam.name} </h3>
                             
                          </div>
                      </div>
<br></br>
                    
                  </div>
              </div>
          </div>
      </div>
</>
  )})}
        </div>

        <div
          className={toggleState === 3 ? "content  active_content" : tabStyle.content}
        >
          <h2>Content 3</h2>
   
        
{pa.matches&&pa.matches?.slice(0,5).map((item)=>{
  return(

    <>
                <Card
    title="."
    hoverable
    
    bordered={false}
    style={{
      width: 900,
      display:"Hidden",
      backgroundColor:"transparent",
      color:"transparent"
    }}
  >
  </Card> 
  {/* {console.log("status",item.status)}          */}
      <div class="container" >
          <div class="row">
              <div class="col-lg-12">
                  <div class="d-flex team-vs">
                      <span class="score">{item.score.fullTime.away}-{item.score.fullTime.home}</span>
                      <div class="team-1 w-50">
                          <div class="team-details w-100 text-center">
                              <img src={item.awayTeam.crest} alt="Image" class="img-fluid" style={{marginLeft:"180px"}} />
                              <h3>{item.awayTeam.name} </h3>
                         
                          </div>
                      </div>
                      <p style={{color:"red",padding:"5px"}}>{item.status}</p>

                      <div class="team-2 w-50">
                          <div class="team-details w-100 text-center">
                              <img src={item.homeTeam.crest} alt="Image" class="img-fluid" style={{marginLeft:"180px"}}/>
                              <h3>{item.homeTeam.name} </h3>
                             
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
</>
  )})}

          
      
        </div>

        <div
          className={toggleState === 4 ? "content  active_content" : tabStyle.content}
        >
          <h2>Content 4</h2>
        
        <Points />
        </div>
      </div>
            <Footer />
          </div>
      
        
      </>
    )
  }
  export default matches

