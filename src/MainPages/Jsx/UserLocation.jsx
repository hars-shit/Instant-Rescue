import React, {useEffect, useState } from "react";
import Map from "./Map";
import StaffInfo from "./StaffInfo";
import Navbar from "./Navbar";
import '../Styles/UserLocation.css'
import SignUpAlert from "./SignUpAlert";
import StreetLoc from "./StreetLoc";

// import { showLocation } from "../../Store/slices/UserSlice";
// import {setLocation1, setLocation2} from "../../Store/slices/UserSlice"
import { useDispatch } from "react-redux";
import { setLocation1, setLocation2 } from "../../Store/slices/UserSlice";
import Footer from "./Footer";


const UserLocation=()=>{
  const dispatch = useDispatch();
    
    // for Longitude=>
  const [long,setLong]=useState();

//   for latitude =>
  const [lat,setLat]=useState();

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position.coords)
            setLong(position.coords.longitude);
            setLat(position.coords.latitude);
            dispatch(setLocation1(position.coords.longitude))
            dispatch(setLocation2(position.coords.latitude))
        })
},[])

 
    return(
      
        <div className="main-section">
             <StreetLoc/>
        {/* <StreetLoc long={long} lat={lat}/> */}
        <section>
          <Navbar />
        </section>
        <section>
           
            <SignUpAlert />
           
        </section>
        <section>
            {
                long && lat &&
            <Map long={long} lat={lat}/>
            }
        </section>
        <section className="staff-container">
          <StaffInfo />
        </section>
        <div className="b-example-divider"></div>
          <Footer />
            </div>
    )
  
}
export default UserLocation;