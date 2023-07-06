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
        <div className="api-card"><Link>tom tom map api<FiArrowUpRight /></Link></div>
        <div className="api-card geo-card"><Link >geoapify reverse geocoding <FiArrowUpRight /></Link></div>
        <div className="api-card"><Link to={"https://www.npmjs.com/package/react-geolocated"}>react-geolocated<FiArrowUpRight /></Link></div>
        </div>
    </div>
    </>
        )
}
export default APIs;