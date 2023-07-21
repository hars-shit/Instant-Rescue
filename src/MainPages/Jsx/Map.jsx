  
import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import {BiSolidLocationPlus} from 'react-icons/bi'
import '../Styles/Map.css'
// import '@tomtom-international/web-sdk-maps/dist/maps.css'
// import '@tomtom-international/web-sdk-maps/dist/maps.css';


const Map = ({long,lat}) => {
    const mapContainerRef = useRef();
    const [map,setMap]=useState({});
  useEffect(() => {
    let map = tt.map({
      

      key: 'nxP60dDKYy8aUSSv0n9zbMBxrCnshiJO', // Replace with your TomTom API key
      container: mapContainerRef.current,
      center:[long,lat],
      // center: [79.331769,	30.404105], // Initial center coordinates
      zoom: 14, // Initial zoom level

    });
  setMap(map)  
  },[]);

  return (
  <div ref={mapContainerRef} className="map-container" />)
};

export default Map;