import React from "react";

import { Link } from "react-router-dom";

import '../Styles/Footer.css'
const Footer=()=>{
    return (
        <>
       
        <div className="b-example-divider"></div>
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
      <li className="nav-item"><Link to="/Features" className="nav-link px-2 text-body-secondary">Features</Link></li>
      <li className="nav-item"><Link to="/APIs" className="nav-link px-2 text-body-secondary">APIs</Link></li>
      <li className="nav-item"><Link to="/FAQs" className="nav-link px-2 text-body-secondary">FAQs</Link></li>
      <li className="nav-item"><Link to="https://github.com/hars-shit/Instant-Rescue" className="nav-link px-2 text-body-secondary">About</Link></li>
    </ul>
    <p className="text-center text-body-secondary">© 2023 instant-rescue, Inc</p>
  </footer>
  </>

    )
}
export default Footer;