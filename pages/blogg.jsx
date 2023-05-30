//working fine
// import React, { useState } from 'react';
// import Head from 'next/head';
// import Nav from "./nav";
// import { HashLoader } from 'react-spinners';


// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
// import { Avatar, Card, Button, Modal, Row, Col } from 'antd';
// const { Meta } = Card;

// export const getStaticProps = async () => {
//   const API_KEY = "b9737ad8-3550-4d05-a3cc-c30ca91ad08f";
//   const res = await fetch(`https://content.guardianapis.com/search?api-key=${API_KEY}&q=football&section=football&tag=football/football&show-fields=all&order-by=newest&lang=en&edition=uk,fr,de,es,it`);
//   const data = await res.json();

//   console.log("data", data);
//   return {
//     props: {
//       data,
//     },
//   };
// };

// const Blog = ({ data }) => {
//   const [expandedCards, setExpandedCards] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalContent, setModalContent] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const handleLinkClick = () => {
//     setIsLoading(true);
//   };
//   const handleCardExpand = (itemId, content) => {
//     if (expandedCards.includes(itemId)) {
//       setExpandedCards(expandedCards.filter((id) => id !== itemId));
//     } else {
//       setExpandedCards([...expandedCards, itemId]);
//       setModalVisible(true);
//       setModalContent(content);
//     }
//   };

//   const handleModalClose = () => {
//     setModalVisible(false);
//   };

//   return (
//     <div>
//       <Head>
//         <meta charset="utf-8" />
//         {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
//     <link rel="icon" href="%PUBLIC_URL%/pngegg.png" />

//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="theme-color" content="#000000" />
//         <meta
//           name="description"
//           content="Web site created using create-react-app"
//         />
//         {/* Rest of the Head component content */}
//         <title>Blog Page</title>
//       </Head>
//       <Nav />



//       <div className="site-wrap">
//         <div className="site-mobile-menu site-navbar-target">
//           <div className="site-mobile-menu-header">
//             <div className="site-mobile-menu-close">
//               <span className="icon-close2 js-menu-toggle"></span>
//             </div>
//           </div>
//           <div className="site-mobile-menu-body"></div>
//         </div>
//         <header className="site-navbar py-4" role="banner">
//           <div className="container">
//             <div className="d-flex align-items-center"></div>
//           </div>
//         </header>
//         <div className="hero overly">
//           <div className="container">
//             <br></br>
//             <br></br>
//             <Row gutter={[16, 16]}>
//               {data &&
//                 data?.response?.results?.map((item) => {
//                   const isExpanded = expandedCards.includes(item.id);

//                   return (
//                     <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
//                       <Card
//                         style={{ width: 300 }}
//                         cover={<img src={item.fields.thumbnail} alt="thumbnail" />}
//                         actions={[
//                           <Button type="link" onClick={() => handleCardExpand(item.id, item.fields.bodyText)}>
//                             {/* {isExpanded ? "Read Less" : "Read More"} */}
//                             Read More
//                           </Button>,
//                           <h2 style={{ color: "red", marginLeft: "0px" }}> BY: {item.fields.byline.substr(0,18)}</h2>
//                         ]}
//                       >
//                         <Meta
//                           avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
//                           title={item.fields.headline}
//                           description={item.fields.trailText.substr(0, 100)}
//                         />
//                       </Card>
//                     </Col>
//                   );
//                 })}
//             </Row>
//           </div>
//         </div>
//       </div>

//       <Modal open={modalVisible} onCancel={handleModalClose} footer={null}>
//       {/* <Modal visible={modalVisible} onCancel={handleModalClose} footer={null}> */}
//         {modalContent}
//       </Modal>

//       <style jsx>{`
//       .blog-card {
//         background-color: #fff;
//         padding: 20px;
//         margin-bottom: 20px;
//         border-radius: 5px;
//         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//       }
      
//           .blog-card__headline {
//             font-size: 24px;
//             font-weight: bold;
//             margin-bottom: 10px;
//             color: #777;

//           }
  
//           .blog-card__body {
//             font-size: 16px;
//             margin-bottom: 10px;
//             color: #777;

//           }
  
//           .blog-card__byline {
//             font-size: 14px;
//             color: #777;
//             margin-bottom: 10px;
//           }
  
//           .blog-card__thumbnail {
//             width: 100%;
//             max-width: 300px;
//             height: auto;
//             margin-bottom: 10px;
//           }
//           `}</style>

//     </div>
//   );
// };

// export default Blog;


import React, { useState } from 'react';
import Head from 'next/head';
import Nav from "./nav";
import { HashLoader } from 'react-spinners';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Button, Modal, Row, Col } from 'antd';
import Footer from './footer';
const { Meta } = Card;

export const getStaticProps = async () => {
  const API_KEY = "b9737ad8-3550-4d05-a3cc-c30ca91ad08f";
  const res = await fetch(`https://content.guardianapis.com/search?api-key=${API_KEY}&q=football&section=football&tag=football/football&show-fields=all&order-by=newest&lang=en&edition=uk,fr,de,es,it`);
  const data = await res.json();

  console.log("data", data);
  return {
    props: {
      data,
    },
  };
};

const Blog = ({ data }) => {
  const [expandedCards, setExpandedCards] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLinkClick = () => {
    setIsLoading(true);
  };

  const handleCardExpand = (itemId, content) => {
    if (expandedCards.includes(itemId)) {
      setExpandedCards(expandedCards.filter((id) => id !== itemId));
    } else {
      setExpandedCards([...expandedCards, itemId]);
      setModalVisible(true);
      setModalContent(content);
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/pngegg.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>Blog Page</title>
      </Head>
      <Nav onLinkClick={handleLinkClick} />
      <br></br>

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

      <div className="site-wrap">

        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          
          <div className="site-mobile-menu-body"></div>
        </div>
        <header className="site-navbar py-4" role="banner">
          <div className="container">
            <div className="d-flex align-items-center"></div>
          </div>
        </header>
        <div className="hero overly">
          <div className="container">
            <br></br>
            <br></br>
            <Row gutter={[16, 16]}>
              {data &&
                data?.response?.results?.map((item) => {
                  const isExpanded = expandedCards.includes(item.id);

                  return (
                    <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                      <Card
                        style={{ width: 300 }}
                        cover={<img src={item.fields.thumbnail} alt="thumbnail" />}
                        actions={[
                          <Button type="link" onClick={() => handleCardExpand(item.id, item.fields.bodyText)}>
                            Read More
                          </Button>,
                          <h2 style={{ color: "red", marginLeft: "0px" }}> BY: {item.fields.byline.substr(0, 18)}</h2>
                        ]}
                      >
                        <Meta
                          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                          title={item.fields.headline}
                          description={item.fields.trailText.substr(0, 100)}
                        />
                      </Card>
                    </Col>
                  );
                })}
            </Row>
                {/* <Footer/> */}
          </div>
        </div>
      </div>

      <Modal open={modalVisible} onCancel={handleModalClose} footer={null}>
        {modalContent}
      </Modal>

      <style jsx>{`
        .blog-card {
          background-color: #fff;
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .blog-card__headline {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #777;
        }

        .blog-card__body {
          font-size: 16px;
          margin-bottom: 10px;
          color: #777;
        }

        .blog-card__byline {
          font-size: 14px;
          color: #777;
          margin-bottom: 10px;
        }

        .blog-card__thumbnail {
          width: 100%;
          max-width: 300px;
          height: auto;
          margin-bottom: 10px;
        }
      `}</style>


    </div>
  );
};

export default Blog;

