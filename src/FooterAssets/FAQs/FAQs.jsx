import React from "react";
import "../FAQs/FAQs.css";
import Navbar from "../../MainPages/Jsx/Navbar";
import {FcLike} from 'react-icons/fc'
const FAQs = () => {
  return (
    <>
      <Navbar />
      <div className="main-faq">
        <div className="faq-heading">FAQs</div>
        <div className="faq">Q1. What is Instant Rescue?</div>
        <div>
          Ans. Instant Rescue is a website designed to provide immediate access
          to information about nearby medical staff and facilities based on your
          location.It also helps people who are travelling or riding accross a
          new area .Helps in injury and accident.
        </div>
        <div className="faq">Q2. How does Instant Rescue work?</div>
        <div>
          Ans. Instant Rescue utilizes location-based services to identify your
          current position and displays a list of medical staff and facilities
          near you.
        </div>
        <div className="faq">
          Q3. How can a medical worker register in this website?
        </div>
        <div>
          Ans. Any medical worker can register in our platform by filling SignUp
          form . After registering the worker will be our new team member <FcLike />.
        </div>
        <div className="faq">
          Q4. Why does any medical worker register in this platform?
        </div>
        <div>
          Ans. Instant Rescue focuses on providing immediate assistance during
          emergencies or urgent medical situations. Medical workers who are part
          of the platform can play a crucial role in responding to emergencies
          promptly and providing timely care to those in need.
        </div>
      </div>
    </>
  );
};
export default FAQs;
