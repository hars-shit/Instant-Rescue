
import React, {useEffect, useState } from "react";
import Map from "./Map";

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


    return(
        <>
        <section>
           
            <h3>Your Current  Cooridinates is [{long}&nbsp;,&nbsp;{lat}]</h3>
           
        </section>
        <section>
            {
                long && lat &&
            <Map long={long} lat={lat}/>
            }
        </section>
            </>
    )
}
export default UserLocation;