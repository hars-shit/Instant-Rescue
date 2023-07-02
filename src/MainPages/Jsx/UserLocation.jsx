import React, {useEffect, useState } from "react";
import Map from "./Map";
import StaffInfo from "./StaffInfo";
import Navbar from "./Navbar";
import '../Styles/UserLocation.css'
import SignUpAlert from "./SignUpAlert";

const UserLocation=()=>{
    
    // for Longitude=>
  const [long,setLong]=useState();

//   for latitude =>
  const [lat,setLat]=useState();


    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position.coords)
            setLong(position.coords.longitude);
           
            setLat(position.coords.latitude);
        })
},[])

  if(long && lat ){

 
    return(
      
        <div className="main-section">
        
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
            </div>
    )
  }
}
export default UserLocation;