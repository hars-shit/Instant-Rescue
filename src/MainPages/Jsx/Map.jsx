  
import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '../Styles/Map.css'
// import '@tomtom-international/web-sdk-maps/dist/maps.css'

const Map = () => {
    const mapContainerRef = useRef();
    const [map,setMap]=useState();

  useEffect(() => {
    let showmap = tt.map({
      key: 'nxP60dDKYy8aUSSv0n9zbMBxrCnshiJO', // Replace with your TomTom API key
      container: mapContainerRef.current,
      center:[79.333333,30.416667],
      // center: [79.331769,	30.404105], // Initial center coordinates
      zoom: 14, // Initial zoom level
    });


  return()=> setMap(showmap)
  
  },[]);

  return (
  <div ref={mapContainerRef} className="map-container" />)
};

export default Map;