import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css'
import {BiMenuAltRight} from 'react-icons/bi'
import {FaStreetView,FaLocationArrow} from 'react-icons/fa'


const Navbar=()=>{
    return <nav className="navbar navbar-dark  fixed-top">
    <div className="container-fluid">
      <p className="navbar-brand heading"><FaStreetView />instant-rescue</p>
      <button className="navbar-toggler btn-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <BiMenuAltRight id="sidemenu-icon"/>
      </button>
      <div className="offcanvas offcanvas-end "  id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <p className="navbar-brand heading" id="offcanvasDarkNavbarLabel"><FaStreetView />instant-rescue</p>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body ">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={'/SignUp'}><FaLocationArrow />SignUp</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="https://github.com/hars-shit/Instant-Rescue"><FaLocationArrow />About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/APIs"><FaLocationArrow />APIs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/FAQs"><FaLocationArrow />FAQs</Link>
            </li>
           
          </ul>
           
        </div>
      </div>
    </div>
  </nav>
}
export default Navbar;