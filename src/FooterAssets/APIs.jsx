import React from "react";
import { Link } from "react-router-dom";
import './APIs.css'
import {FiArrowUpRight} from 'react-icons/fi';
import Navbar from "../MainPages/Jsx/Navbar";
const APIs=()=>{
    return  (

        <>
        <Navbar />
    <div className="main-api">
        <div className="api-heading">APIs Utilized</div>
        <div className="cards">
        <div className="api-card"><Link>Tom-Tom Map API<FiArrowUpRight /></Link></div>
        <div className="api-card geo-card"><Link >Geoapify Reverse Geocoding API<FiArrowUpRight id="geo-arrow"/></Link></div>
        <div className="api-card"><Link to={"https://www.npmjs.com/package/react-geolocated"}>React-Geolocated<FiArrowUpRight /></Link></div>
        </div>
    </div>
    </>
        )
}
export default APIs;