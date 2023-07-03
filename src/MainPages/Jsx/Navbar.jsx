import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css'
import {BiMenuAltRight} from 'react-icons/bi'


const Navbar=()=>{
    return <nav className="navbar navbar-dark bg-secondary fixed-top">
    <div className="container-fluid">
      <p className="navbar-brand heading">insta-Rescue</p>
      <button className="navbar-toggler btn-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <BiMenuAltRight id="sidemenu-icon"/>
      </button>
      <div className="offcanvas offcanvas-end text-bg-dark"  id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={'/SignUp'}>SignUp</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
           
          </ul>
           
        </div>
      </div>
    </div>
  </nav>
}
export default Navbar;