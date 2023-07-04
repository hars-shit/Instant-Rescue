import React, { useEffect, useState } from "react";
import {MdAddCall} from 'react-icons/md'
import '../Styles/Staff.css'
import { data } from "../../FakeData/data";
// import {data}  from "../../FakeData/data";
const StaffInfo=()=>{
   
    const [isVisible,setIsVisible]=useState(false);
    useEffect(()=>{
       const interval = setInterval(()=>{
        setIsVisible(true);
        clearInterval(interval);
        },3000)
    return ()=>{
        clearInterval(interval);
    }
    },[])
    return (<section className="staff-container">
        {/* for  the data of the mdecical staff  */}
        <div><p className="medical-heading">Available Medical workforce</p></div>
        { !isVisible && 
            <div className="loader"></div>
        }
        {
            isVisible &&
      data.map((e,key)=>{

     return(

     
          <div className="info-staff" key={key}>
          <div className="info-image">
           

            <img src={e.image} alt="" />
            </div>
            
            <div className="info-name">

                <h5 id="name">{e.name}</h5>
            <p id="occupation">{e.occupation}</p>
            </div>
            <div className="info-call">

            <a to={`tel:${e.phone_no}`} ><MdAddCall id="call-icon" /></a>
            </div>
            

        </div>
        ) })

          }
    </section>)
}
export default StaffInfo;