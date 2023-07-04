import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showLocation } from "../../Store/slices/UserSlice";

const UserDetails=()=>{
    const dispatch=useDispatch();
}
const handleclick=(payload)=>{
    dispatch(showLocation(payload))
}
const StreetLoc=({long,lat})=>{
    const [address1,setAddress1]=useState();
    const [address2,setAddress2]=useState();
    useEffect(()=>{
        // https://api.geoapify.com/v1/geocode/reverse?lat=51.21709661403662&lon=6.7782883744862374&apiKey=4b8a104524124d3cad89fcd785ad9007
        const userLocation=async()=>{
            try{
                const response=await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=4b8a104524124d3cad89fcd785ad9007`)
           setAddress1(response.data.features[0].properties.address_line1);
            setAddress2(response.data.features[0].properties.address_line2);
            
            // console.log(response.data)
            console.log(response.data.features[0].properties.address_line1);
            console.log(response.data.features[0].properties.address_line2);

            }
            catch(err){
                console.log(err)
            }
            
        }
        userLocation()


    },[])
    return ( 
        
        <>
     {   
            address1 && address2  &&
            <div className="user-location">
            {/* <p>street:{address1}</p>
        <p>adress line:{address2}</p> */}
        <button onClick={()=>handleclick(address1)}></button>
        </div>
        
        
    }
    </>
    
        )
}
export default StreetLoc;