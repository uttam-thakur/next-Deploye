{/* <Head>
             <meta charset="utf-8" />
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#000000" />
<meta
  name="description"
  content="Web site created using create-react-app"
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
<title>detail Page</title>
</Head> */}

// useEffect(() => {
//   const timeout = setTimeout(() => {
//     localStorage.clear();
//     router.push('/login');
//   }, 240000);

//   return () => clearTimeout(timeout);
// }, []);

// old one without loader

import Link from 'next/link'
import { IoLogOut } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { userAccessToken, fetchUser } from "../utils/fetchDetails";
import { useRouter } from "next/router";
import Head from 'next/head';
import { Button, Drawer, Radio, Space } from 'antd';


const Nav = ({onLinkClick}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) return router.push('/login');
    const [userInfo] = fetchUser();
    setUser(userInfo);
  }, []);

  const logout = () => {
    localStorage.clear();
    router.push('/login');
  };


  return (
    <>

{/* <header className="site-navbar py-4" role="banner">
      <div className="container">
        <div className="d-flex align-items-center">
         

<Space>
        <Button type="primary" onClick={showDrawer}>
          open
        </Button>
      </Space>
      <Drawer
        title={user?.displayName}
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
         <div className="site-logo">
            <a href="#">
              <img
                src={user?.photoURL}
                className=""
                style={{ height: '30px', width: '30px', borderRadius: '5px' }}
                alt=""
              />
            </a>
          </div>

          <div className="ml-auto">
            <nav className="site-navigation position-relative text-right" role="navigation">
              <div className="menu-container">
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <Link href="/" legacyBehavior>
                    <li className={router.pathname === '/' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Home</a>
                    </li>
                  </Link>

                  <Link href="/matches" legacyBehavior>
                    <li className={router.pathname === '/matches' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Matches</a>
                    </li>
                  </Link>

                  <Link href="/players" legacyBehavior>
                    <li className={router.pathname === '/players' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Players</a>
                    </li>
                  </Link>

                  <Link href="/blogg" legacyBehavior>
                    <li className={router.pathname === '/blogg' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Blog</a>
                    </li>
                  </Link>

                  <Link href="/highlights" legacyBehavior>
                    <li className={router.pathname === '/highlights' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Highlights</a>
                    </li>
                  </Link>

                  <Link href="/contact" legacyBehavior>
                    <li className={router.pathname === '/contact' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Contact</a>
                    </li>
                  </Link>
                </ul>
              </div>
            </nav>
            <IoLogOut
              fontSize={25}
              className="absolute top-3 right-3 cursor-pointer text-gray-600"
              onClick={logout}
            />

            <a
              href="#"
              className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"
            >
              <span className="icon-menu h3 text-white"></span>
            </a>
          </div>
    </Drawer>

        </div>
      </div>

      <style jsx>{`
        .menu-container {
          overflow: hidden;
        }
          .site-menu.main-menu li {
            width: calc(100% / 6);
          }
        }
      `}</style>
    </header> */}

<header className="site-navbar py-4" role="banner">
  <div className="container">
    <div className="d-flex align-items-center">
      <div className="site-logo">
        <a href="#">
          <img
            src={user?.photoURL}
            className=""
            style={{ height: '30px', width: '30px', borderRadius: '5px' }}
            alt=""
          />
        </a>
      </div>
      <div className="ml-auto">
        <nav className="site-navigation position-relative text-right" role="navigation">
          <div className="menu-container">
            <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
              {/* Navigation links */}

              <Link href="/" legacyBehavior>
                    <li className={router.pathname === '/' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Home</a>
                    </li>
                  </Link>

                  <Link href="/matches" legacyBehavior>
                    <li className={router.pathname === '/matches' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Matches</a>
                    </li>
                  </Link>

                  <Link href="/players" legacyBehavior>
                    <li className={router.pathname === '/players' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Players</a>
                    </li>
                  </Link>

                  <Link href="/blogg" legacyBehavior>
                    <li className={router.pathname === '/blogg' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Blog</a>
                    </li>
                  </Link>

                  <Link href="/highlights" legacyBehavior>
                    <li className={router.pathname === '/highlights' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Highlights</a>
                    </li>
                  </Link>

                  <Link href="/contact" legacyBehavior>
                    <li className={router.pathname === '/contact' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Contact</a>
                    </li>
                  </Link>
            </ul>
          </div>
        </nav>
        <IoLogOut
          fontSize={25}
          className="absolute top-3 right-3 cursor-pointer text-gray-600"
          onClick={logout}
        />

        <a
          href="#"
          className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"
        >
          <span className="icon-menu h3 text-white"></span>
        </a>

        {/* Open button for mobile */}
        <div className="d-lg-none">
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
          <Drawer
            title={user?.displayName}
            placement="right"
            closable={false}
            onClose={onClose}
            open={open}
            key={placement}
          >
            {/* Content inside the Drawer */}
            <div className="site-logo">
              <a href="#">
                <img
                  src={user?.photoURL}
                  className=""
                  style={{ height: '30px', width: '30px', borderRadius: '5px' }}
                  alt=""
                />
              </a>
            </div>
            <div className="ml-auto">
              <nav className="site-navigation position-relative text-right" role="navigation">
                <div className="menu-container">
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-block d-lg-none">
                    {/* Navigation links */}

                    <Link href="/" legacyBehavior>
                    <li className={router.pathname === '/' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Home</a>
                    </li>
                  </Link>

                  <Link href="/matches" legacyBehavior>
                    <li className={router.pathname === '/matches' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Matches</a>
                    </li>
                  </Link>

                  <Link href="/players" legacyBehavior>
                    <li className={router.pathname === '/players' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Players</a>
                    </li>
                  </Link>

                  <Link href="/blogg" legacyBehavior>
                    <li className={router.pathname === '/blogg' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Blog</a>
                    </li>
                  </Link>

                  <Link href="/highlights" legacyBehavior>
                    <li className={router.pathname === '/highlights' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Highlights</a>
                    </li>
                  </Link>

                  <Link href="/contact" legacyBehavior>
                    <li className={router.pathname === '/contact' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Contact</a>
                    </li>
                  </Link>
                  </ul>
                </div>
              </nav>
              <IoLogOut
                fontSize={25}
                className="absolute top-3 right-3 cursor-pointer text-gray-600"
                onClick={logout}
              />
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    .menu-container {
      overflow: hidden;
    }
    .site-menu.main-menu li {
      width: calc(100% / 6);
    }
  `}</style>
</header>



    </>
  );
};

export default Nav;

      {/* <header className="site-navbar py-4" role="banner">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="site-logo">
              <a href="#">
                <img
                  src={user?.photoURL}
                  className=""
                  style={{ height: '30px', width: '30px', borderRadius: '5px' }}
                  alt=""
                />
              </a>
            </div>
            <div className="ml-auto">
              <nav className="site-navigation position-relative text-right" role="navigation">
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <Link href="/" legacyBehavior >
                    <li className={router.pathname === '/' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Home</a>
                    </li>
                  </Link>

                  <Link href="/matches" legacyBehavior>
                    <li className={router.pathname === '/matches' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Matches</a>
                    </li>
                  </Link>

                  <Link href="/players" legacyBehavior>
                    <li className={router.pathname === '/players' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Players</a>
                    </li>
                  </Link>

                  <Link href="/blogg" legacyBehavior>
                    <li className={router.pathname === '/blogg' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Blog</a>
                    </li>
                  </Link>

                  <Link href="/highlights" legacyBehavior>
                    <li className={router.pathname === '/highlights' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Highlights</a>
                    </li>
                  </Link>

                  <Link href="/contact" legacyBehavior>
                    <li className={router.pathname === '/contact' ? 'active' : ''}>
                      <a className="nav-link" onClick={onLinkClick}>Contact</a>
                    </li>
                  </Link>
                </ul>
              </nav>
              <IoLogOut
                fontSize={25}
                className="absolute top-3 right-3 cursor-pointer text-gray-600"
                onClick={logout}
              />

              <a
                href="#"
                className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"
              >
                <span className="icon-menu h3 text-white"></span>
              </a>
            </div>
          </div>
        </div>
      </header> */}

{/* code for responsive */}

// with only one loader at middle

// import Link from 'next/link'
// import { IoLogOut } from "react-icons/io5";
// import React, { useEffect, useState } from "react";
// import { userAccessToken, fetchUser } from "../utils/fetchDetails";
// import { useRouter } from "next/router";
// import Head from 'next/head';

// const Nav = () => {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const accessToken = userAccessToken();
//     if (!accessToken) return router.push('/login');
//     const [userInfo] = fetchUser();
//     setUser(userInfo);
//   }, []);

//   const logout = () => {
//     localStorage.clear();
//     router.push('/login');
//   };

//   const handleLinkClick = () => {
//     setIsLoading(true);
//   };

//   return (
//     <>
//       <header className="site-navbar py-4" role="banner">
//         <div className="container">
//           <div className="d-flex align-items-center">
//             <div className="site-logo">
//               <a href="#">
//                 <img
//                   src={user?.photoURL}
//                   className=""
//                   style={{ height: '30px', width: '30px', borderRadius: '5px' }}
//                   alt=""
//                 />
//               </a>
//             </div>
//             <div className="ml-auto">
//               <nav className="site-navigation position-relative text-right" role="navigation">
//                 <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
//                   <Link href="/" legacyBehavior>
//                     <li className={router.pathname === '/' ? 'active' : ''}>
//                       <a className="nav-link" onClick={handleLinkClick}>
//                         Home
//                       </a>
//                     </li>
//                   </Link>

//                   <Link href="/matches" legacyBehavior>
//                     <li className={router.pathname === '/matches' ? 'active' : ''}>
//                       <a className="nav-link" onClick={handleLinkClick}>
//                         Matches
//                       </a>
//                     </li>
//                   </Link>

//                   <Link href="/players" legacyBehavior>
//                     <li className={router.pathname === '/players' ? 'active' : ''}>
//                       <a className="nav-link" onClick={handleLinkClick}>
//                         Players
//                       </a>
//                     </li>
//                   </Link>

//                   <Link href="/blogg" legacyBehavior>
//                     <li className={router.pathname === '/blogg' ? 'active' : ''}>
//                       <a className="nav-link" onClick={handleLinkClick}>
//                         Blog
//                       </a>
//                     </li>
//                   </Link>

//                   <Link href="/contact" legacyBehavior>
//                     <li className={router.pathname === '/contact' ? 'active' : ''}>
//                       <a className="nav-link" onClick={handleLinkClick}>
//                         Contact
//                       </a>
//                     </li>
//                   </Link>
//                 </ul>
//               </nav>
//               <IoLogOut
//                 fontSize={25}
//                 className="absolute top-3 right-3 cursor-pointer text-gray-600"
//                 onClick={logout}
//               />

//               <a
//                 href="#"
//                 className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"
//               >
//                 <span className="icon-menu h3 text-white"></span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>
//       {isLoading && (
//         <div className="loader-container">
//           <div className="loader">Loading...</div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Nav;

//worked

// import Link from 'next/link';
// import { IoLogOut } from 'react-icons/io5';
// import React, { useEffect, useState } from 'react';
// import { userAccessToken, fetchUser } from '../utils/fetchDetails';
// import { useRouter } from 'next/router';
// import Head from 'next/head';
// import { HashLoader } from 'react-spinners';

// const Nav = () => {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const accessToken = userAccessToken();
//     if (!accessToken) return router.push('/login');
//     const [userInfo] = fetchUser();
//     setUser(userInfo);
//   }, []);

//   const logout = () => {
//     localStorage.clear();
//     router.push('/login');
//   };

//   const handleLinkClick = () => {
//     setIsLoading(true);
//   };

//   return (
//     <>
//       <header className="site-navbar py-4" role="banner">
//         <div className="container">
//           <div className="d-flex align-items-center">
//             <div className="site-logo">
//               <a href="#">
//                 <img
//                   src={user?.photoURL}
//                   className=""
//                   style={{ height: '30px', width: '30px', borderRadius: '5px' }}
//                   alt=""
//                 />
//               </a>
//             </div>
//             <div className="ml-auto">
//               <nav className="site-navigation position-relative text-right" role="navigation">
//                 <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
//                   <Link href="/" legacyBehavior>
//                     <li className={router.pathname === '/' ? 'active' : ''}>
//                       <a className="nav-link" onClick={handleLinkClick}>
//                         Home
//                       </a>
//                     </li>
//                   </Link>

//                   <Link href="/matches" legacyBehavior>
//                     <li className={router.pathname === '/matches' ? 'active' : ''}>
//                       <a className="nav-link" onClick={handleLinkClick}>
//                         Matches
//                       </a>
//                     </li>
//                   </Link>

//                   <Link href="/players" legacyBehavior>
//                     <li className={router.pathname === '/players' ? 'active' : ''}>
//                       <a className="nav-link" onClick={handleLinkClick}>
//                         Players
//                       </a>
//                     </li>
//                   </Link>

//                   <Link href="/blogg" legacyBehavior>
//                     <li className={router.pathname === '/blogg' ? 'active' : ''}>
//                       <a className="nav-link" onClick={handleLinkClick}>
//                         Blog
//                       </a>
//                     </li>
//                   </Link>

//                   <Link href="/contact" legacyBehavior>
//                     <li className={router.pathname === '/contact' ? 'active' : ''}>
//                       <a className="nav-link" onClick={handleLinkClick}>
//                         Contact
//                       </a>
//                     </li>
//                   </Link>
//                 </ul>
//               </nav>
//               <IoLogOut
//                 fontSize={25}
//                 className="absolute top-3 right-3 cursor-pointer text-gray-600"
//                 onClick={logout}
//               />

//               <a
//                 href="#"
//                 className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"
//               >
//                 <span className="icon-menu h3 text-white"></span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>
//       {isLoading && (
//         <div className="loader-container">
//           <HashLoader color="#000000" size={50} />
//         </div>
//       )}
//     </>
//   );
// };

// export default Nav;


