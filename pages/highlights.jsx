// import React, { useState, useEffect } from 'react';
// import Nav from './nav';
// import { HashLoader } from 'react-spinners';


// const PAGE_SIZE = 6; 

//   const Highlights = () => {
//   const [videos, setVideos] = useState([]);
//   const [search, setSearch] = useState('');

//   const [isLoading, setIsLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMoreVideos, setHasMoreVideos] = useState(true);

//   const handleLinkClick = () => {
//     setIsLoading(true);
//   };

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = () => {
//     setIsLoading(true);
//     const startIndex = (currentPage - 1) * PAGE_SIZE;
//     const endIndex = startIndex + PAGE_SIZE;

//     fetch(
//       `https://www.scorebat.com/video-api/v3/feed/?token=ODg2OTBfMTY4NDc1Njg4NV8yZjdmYTkxNTBjOWJhM2RmZmViMzc5MjkxMjk2ZWVmM2UyNjczYmY4&page=${currentPage}&limit=${PAGE_SIZE}`
//     )
//       .then(response => response.json())
//       .then(data => {
//         const allVideos = data.response.map(video => {
//           const videoUrl = video.videos[0].embed.match(/src='([^']+)'/)[1];
//           const date = new Date(video.date);
//           const formattedDate = `${date.getDate()} ${getMonthName(
//             date.getMonth()
//           )} ${date.getFullYear()} ${formatTime(
//             date.getHours(),
//             date.getMinutes()
//           )}`;
//           return { ...video, videoUrl, formattedDate };
//         });

//         setVideos(prevVideos => [...prevVideos, ...allVideos]);
//         setIsLoading(false);

//         if (allVideos.length < PAGE_SIZE) {
//           setHasMoreVideos(false);
//         }
//       })
//       .catch(error => {
//         console.error(error);
//         setIsLoading(false);
//       });
//   };
//   const handleSearch = (event) => {
//     setSearch(event.target.value);
//   };
//   const filteredData = videos.filter((item) =>
//   item.competition.toLowerCase().includes(search.toLowerCase())
// );
// console.log("filteredData",filteredData);

//   const getMonthName = monthIndex => {
//     const monthNames = [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec'
//     ];
//     return monthNames[monthIndex];
//   };

//   const formatTime = (hours, minutes) => {
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     const formattedHours = hours % 12 || 12;
//     const formattedMinutes = minutes.toString().padStart(2, '0');
//     return `${formattedHours}:${formattedMinutes} ${ampm}`;
//   };

//   const handleLoadMore = () => {
//     setCurrentPage(prevPage => prevPage + 1);
//   };
  

//   const displayedVideos = videos.slice(0, currentPage * PAGE_SIZE);


//   return (
//     <div>
//  <Nav onLinkClick={handleLinkClick} />
//       <br></br>

//       {isLoading && (
//         <>
//           <div
//             style={{
//               position: 'fixed',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               backgroundColor: 'rgba(0, 0, 0, 0.5)',
//               zIndex: 9999,
//             }}
//           />
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               position: 'fixed',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               zIndex: 10000,
//             }}
//           >
//             <HashLoader color="#ffffff" size={50} />
//           </div>
//         </>
//       )}      <br></br>
//       <br></br>
//       <br></br>
// <input type="text" placeholder="Search" onChange={handleSearch} />

//     <div
//       style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between'
//       }}
//     >

// {/* showing all data in result */}

//    {
//     // !search?
   
//    displayedVideos.map((video, index) => (
//         <div
//           key={video.title}
//           style={{
//             width: 'calc(50% - 20px)',
//             marginBottom: '20px',
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//             padding: '20px',
//             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
//           }}
//         >
//           <h2 style={{ marginBottom: '10px' }}>{video.title}</h2>
//           <p style={{ marginBottom: '5px' }}>{video.competition}</p>
//           <p style={{ marginBottom: '5px' }}>{video.formattedDate}</p>
//           <div
//             style={{
//               position: 'relative',
//               width: '100%',
//               height: '0',
//               paddingBottom: '56.25%',
//               marginBottom: '10px'
//             }}
//           >
//             <iframe
//               src={video.videoUrl}
//               title={video.title}
//               allowFullScreen
//               allow="autoplay; fullscreen"
//               style={{
//                 position: 'absolute',
//                 top: '0',
//                 left: '0',
//                 width: '100%',
//                 height: '100%',
//                 border: 'none',
//                 boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//                 borderRadius: '4px'
//               }}
//             ></iframe>
//           </div>
//         </div>
//       ))
//     // :
//     //    filteredData.map((video, index) => (
//     //     <div
//     //       key={video.title}
//     //       style={{
//     //         width: 'calc(50% - 20px)',
//     //         marginBottom: '20px',
//     //         border: '1px solid #ccc',
//     //         borderRadius: '4px',
//     //         padding: '20px',
//     //         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
//     //       }}
//     //     >
//     //       <h2 style={{ marginBottom: '10px' }}>{video.title}</h2>
//     //       <p style={{ marginBottom: '5px' }}>{video.competition}</p>
//     //       <p style={{ marginBottom: '5px' }}>{video.formattedDate}</p>
//     //       <div
//     //         style={{
//     //           position: 'relative',
//     //           width: '100%',
//     //           height: '0',
//     //           paddingBottom: '56.25%',
//     //           marginBottom: '10px'
//     //         }}
//     //       >
//     //         <iframe
//     //           src={video.videoUrl}
//     //           title={video.title}
//     //           allowFullScreen
//     //           allow="autoplay; fullscreen"
//     //           style={{
//     //             position: 'absolute',
//     //             top: '0',
//     //             left: '0',
//     //             width: '100%',
//     //             height: '100%',
//     //             border: 'none',
//     //             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//     //             borderRadius: '4px'
//     //           }}
//     //         ></iframe>
//     //       </div>
//     //     </div>
//     //   ))
//       }

  
//       {isLoading && <p>Loading...</p>}
//       {!isLoading && hasMoreVideos && (
//         <button
//         onClick={handleLoadMore}
//         style={{
//           padding: '10px 20px',
//           borderRadius: '4px',
//           border: 'none',
//           background: '#007bff',
//           color: '#fff',
//           cursor: 'pointer',
//           width: '100%'
//         }}
//         >
//           Load More
//         </button>
//       )}
//     </div>
//     {/* <Footer/> */}
//     </div>
//   );
// };

// export default Highlights;


{/* {filteredData.map((video, index) => (
        <div
          key={video.title}
          style={{
            width: 'calc(50% - 20px)',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h2 style={{ marginBottom: '10px' }}>{video.title}</h2>
          <p style={{ marginBottom: '5px' }}>{video.competition}</p>
          <p style={{ marginBottom: '5px' }}>{video.formattedDate}</p>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '0',
              paddingBottom: '56.25%',
              marginBottom: '10px'
            }}
          >
            <iframe
              src={video.videoUrl}
              title={video.title}
              allowFullScreen
              allow="autoplay; fullscreen"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '4px'
              }}
            ></iframe>
          </div>
        </div>
      ))} */}


// new one 

// import React, { useState, useEffect } from 'react';
// import Nav from './nav';
// import { HashLoader } from 'react-spinners';

// const PAGE_SIZE = 6;

// const Highlights = () => {
//   const [videos, setVideos] = useState([]);
//   const [search, setSearch] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);

//   const [isLoading, setIsLoading] = useState(false);
//   const [hasMoreVideos, setHasMoreVideos] = useState(true);

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = () => {
//     setIsLoading(true);
//     const startIndex = (currentPage - 1) * PAGE_SIZE;
//     const endIndex = startIndex + PAGE_SIZE;
  
//     fetch(
//       `https://www.scorebat.com/video-api/v3/feed/?token=ODg2OTBfMTY4NDc1Njg4NV8yZjdmYTkxNTBjOWJhM2RmZmViMzc5MjkxMjk2ZWVmM2UyNjczYmY4&page=${currentPage}&limit=${PAGE_SIZE}`
//     )
//       .then(response => response.json())
//       .then(data => {
//         const allVideos = data.response.map(video => {
//           const videoUrl = video.videos[0].embed.match(/src='([^']+)'/)[1];
//           const date = new Date(video.date);
//           const formattedDate = `${date.getDate()} ${getMonthName(
//             date.getMonth()
//           )} ${date.getFullYear()} ${formatTime(
//             date.getHours(),
//             date.getMinutes()
//           )}`;
//           return { ...video, videoUrl, formattedDate };
//         });
  
//         setVideos(prevVideos => [...prevVideos, ...allVideos]);
//         setIsLoading(false);
  
//         if (allVideos.length < PAGE_SIZE) {
//           setHasMoreVideos(false);
//         }
  
//         const newDisplayedVideos = [...videos, ...allVideos];
//         setDisplayedVideos(newDisplayedVideos.slice(0, currentPage * PAGE_SIZE));
//       })
//       .catch(error => {
//         console.error(error);
//         setIsLoading(false);
//       });
//   };
  
  
//   const handleSearch = (event) => {
//     setSearch(event.target.value);
//   };

//   const filteredData = videos
//     .filter((item) => item.competition.toLowerCase().includes(search.toLowerCase()))
//     .slice(0, 6);

//   const getMonthName = (monthIndex) => {
//     const monthNames = [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec',
//     ];
//     return monthNames[monthIndex];
//   };

//   const formatTime = (hours, minutes) => {
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     const formattedHours = hours % 12 || 12;
//     const formattedMinutes = minutes.toString().padStart(2, '0');
//     return `${formattedHours}:${formattedMinutes} ${ampm}`;
//   };

//   const handleLoadMore = () => {
//     setCurrentPage(prevPage => prevPage + 1);
//     fetchVideos();

//   };

//   return (
//     <div>
//       <Nav onLinkClick={() => {}} />
//       <br></br>
//       {isLoading && (
//         <>
//           <div
//             style={{
//               position: 'fixed',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               backgroundColor: 'rgba(0, 0, 0, 0.5)',
//               zIndex: 9999,
//             }}
//           />
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               position: 'fixed',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               zIndex: 10000,
//             }}
//           >
//             <HashLoader color="#ffffff" size={50} />
//           </div>
//         </>
//       )}
//       <br></br>
//       <br></br>
//       <br></br>
//       <input type="text" placeholder="Search" onChange={handleSearch} />

//       <div
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'space-between',
//         }}
//       >
//         {/* Showing filtered videos */}
//         {filteredData.map((video, index) => (
//           <div
//             key={video.title}
//             style={{
//               width: 'calc(50% - 20px)',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               padding: '20px',
//               boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//             }}
//           >
//             <h2 style={{ marginBottom: '10px' }}>{video.title}</h2>
//             <p style={{ marginBottom: '5px' }}>{video.competition}</p>
//             <p style={{ marginBottom: '5px' }}>{video.formattedDate}</p>
//             <div
//               style={{
//                 position: 'relative',
//                 width: '100%',
//                 height: '0',
//                 paddingBottom: '56.25%',
//                 marginBottom: '10px',
//               }}
//             >
//               <iframe
//                 src={video.videoUrl}
//                 title={video.title}
//                 allowFullScreen
//                 allow="autoplay; fullscreen"
//                 style={{
//                   position: 'absolute',
//                   top: '0',
//                   left: '0',
//                   width: '100%',
//                   height: '100%',
//                   border: 'none',
//                   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//                   borderRadius: '4px',
//                 }}
//               ></iframe>
//             </div>
//           </div>
//         ))}

//         {isLoading && <p>Loading...</p>}
//         {!isLoading && hasMoreVideos && (
//           <button
//             onClick={handleLoadMore}
//             style={{
//               padding: '10px 20px',
//               borderRadius: '4px',
//               border: 'none',
//               background: '#007bff',
//               color: '#fff',
//               cursor: 'pointer',
//               width: '100%',
//             }}
//           >
//             Load More
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Highlights;


// new 

import React, { useState, useEffect } from 'react';
import Nav from './nav';
import { HashLoader } from 'react-spinners';
import Footer from './footer';

const PAGE_SIZE = 6;

const Highlights = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreVideos, setHasMoreVideos] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleLinkClick = () => {
    setIsLoading(true);
  };

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  const fetchVideos = () => {
    setIsLoading(true);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    fetch(
      `https://www.scorebat.com/video-api/v3/feed/?token=ODg2OTBfMTY4NDc1Njg4NV8yZjdmYTkxNTBjOWJhM2RmZmViMzc5MjkxMjk2ZWVmM2UyNjczYmY4&page=${currentPage}&limit=${PAGE_SIZE}`
    )
      .then(response => response.json())
      .then(data => {
        const allVideos = data.response.map(video => {
          const videoUrl = video.videos[0].embed.match(/src='([^']+)'/)[1];
          const date = new Date(video.date);
          const formattedDate = `${date.getDate()} ${getMonthName(
            date.getMonth()
          )} ${date.getFullYear()} ${formatTime(
            date.getHours(),
            date.getMinutes()
          )}`;
          return { ...video, videoUrl, formattedDate };
        });

        setVideos(prevVideos => [...prevVideos, ...allVideos]);
        setIsLoading(false);

        if (allVideos.length < PAGE_SIZE) {
          setHasMoreVideos(false);
        }
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const getMonthName = monthIndex => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    return monthNames[monthIndex];
  };

  const formatTime = (hours, minutes) => {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const filteredData = videos.filter(item =>
    item.competition.toLowerCase().includes(search.toLowerCase().slice(0, currentPage * PAGE_SIZE))
  );

  const displayedVideos = filteredData.slice(0, currentPage * PAGE_SIZE);

  return (
    <div>
      <Nav onLinkClick={handleLinkClick} />
      <br />
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
              zIndex: 9999
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
              zIndex: 10000
            }}
          >
            <HashLoader color="#ffffff" size={50} />
          </div>
        </>
      )}
      <br />
      <br />
      <br />
      <input type="text" placeholder="Search" onChange={handleSearch} />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
      >
        {displayedVideos.map((video, index) => (
          <div
            key={video.title}
            style={{
              width: 'calc(50% - 20px)',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '20px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h2 style={{ marginBottom: '10px' }}>{video.title}</h2>
            <p style={{ marginBottom: '5px' }}>{video.competition}</p>
            <p style={{ marginBottom: '5px' }}>{video.formattedDate}</p>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 0,
                paddingBottom: '56.25%',
                marginBottom: '10px'
              }}
            >
              <iframe
                src={video.videoUrl}
                title={video.title}
                allowFullScreen
                allow="autoplay; fullscreen"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  borderRadius: '4px'
                }}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && hasMoreVideos && (
        <button
          onClick={handleLoadMore}
          style={{
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            background: '#007bff',
            color: '#fff',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Load More
        </button>
      )}
      <Footer/>
    </div>
  );
};

export default Highlights;

