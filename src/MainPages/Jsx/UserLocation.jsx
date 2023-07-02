import React, {useEffect, useState } from "react";
import Map from "./Map";
import StaffInfo from "./StaffInfo";
import Navbar from "./Navbar";

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
      
        <>
        
        <section>
          <Navbar />
        </section>
        <section>
           
            <h3>Your Current  Cooridinates is [{long}&nbsp;,&nbsp;{lat}]</h3>
           
        </section>
        <section>
            {
                long && lat &&
            <Map long={long} lat={lat}/>
            }
        </section>
        <section>
          <StaffInfo />
        </section>
            </>
    )
  }
}
export default UserLocation;