import React, { useState } from "react";
import { message } from "antd";
import emailjs from 'emailjs-com'
import  Footer  from "./footer"
import Nav from "./nav"
import { HashLoader } from 'react-spinners';

const Contact = () => {
  const [feedback, setfeedback] = useState({
    namee: "",
    emaill: "",
    Comment: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLinkClick = () => {
    setIsLoading(true);
  };
     function sendEmail(e){
      e.preventDefault();
  
      emailjs.sendForm('service_l37lwpj','template_25ybnov', e.target, 'Nw7AxfQ-a0XQdVmy0') 
      .then(res =>{
          console.log(res);
      }).catch(err =>
           console.log(err))
  }
       function sendFeedbackHandler(){
  
    
      if (feedback?.namee?.length < 2) {
        message.error("Please enter the valid name");
      } else if (!feedback?.emaill?.includes(".com")) {
        message.error("Please enter the valid email");
      } else if (feedback?.Comment === "") {
        message.error("Add some comment for feedback");
      } else {
        message.success("Thanks for your feedback");
        // setfeedback({ name: "", email: "", password: "" });
        setTimeout(()=> setfeedback({ namee: "", emaill: "", comment: "" }),2000
        )
        // setfeedback({ namee: "", emaill: "", comment: "" });
      }
    };
    return (
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


    <div
      style={{
        display: "flex",
        height: "50vh",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <h1>Feedback</h1>
    <form onSubmit={sendEmail}>

      <input
        type="text"
        name="name"
        // className="input"
        value={feedback.namee}
        placeholder="Name"
        onChange={(e) => {
          setfeedback({ ...feedback, namee: e.target.value });
          console.log(e.target.value );
        }}
      />
      <input
        type="email"
        // className="input"
        name="user_email"
        value={feedback.emaill}
        placeholder="Email"
        onChange={(e) => {
          setfeedback({ ...feedback, emaill: e.target.value });
          console.log(e.target.value );

        }}
      />
      <br></br>
      <br></br>
      <textarea
        type="textarea"
        className="textarea"
        name="message"
        value={feedback.Comment}
        placeholder="Feedback"
        onChange={(e) => {
          setfeedback({ ...feedback, Comment: e.target.value });
        }}
      />
      <br></br>
      <button onClick={sendFeedbackHandler}  type="submit" value="Send"> Send</button>

    </form>

    </div>
    <Footer/>

      </div>
    )
  }
  
  export default Contact
  
  
  {/* <input type="submit" value="Send" onClick={sendFeedbackHandler}/> */}

  




