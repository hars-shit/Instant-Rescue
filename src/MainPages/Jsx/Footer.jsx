import React from "react";

import { Link } from "react-router-dom";

import '../Styles/Footer.css'
const Footer=()=>{
    return (
        <>
       
        <div className="b-example-divider"></div>
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3" style={{paddingRight:'23px'}}>
      {/* <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li> */}
      <li className="nav-item"><Link to="/SignUp" className="nav-link px-2 text-body-secondary footer-link">SignUp </Link></li>
      <li className="nav-item"><Link to="/APIs" className="nav-link px-2 text-body-secondary footer-link">APIs</Link></li>
      <li className="nav-item"><Link to="/FAQs" className="nav-link px-2 text-body-secondary footer-link">FAQs</Link></li>
      <li className="nav-item"><Link to="https://github.com/hars-shit/Instant-Rescue" className="nav-link px-2 text-body-secondary footer-link">About</Link></li>
    </ul>
    <p className="text-center text-body-secondary footer-link">© 2023 instant-rescue, Inc</p>
  </footer>
  </>

    )
}
export default Footer;