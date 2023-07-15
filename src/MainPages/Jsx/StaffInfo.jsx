import React, { useEffect, useState } from "react";
import {MdAddCall} from 'react-icons/md'
import '../Styles/Staff.css'
import image  from '/home/harshit/Desktop/React/Insta rescue/src/assets/medical-team.png'
import {FcSearch} from 'react-icons/fc'
import axios from "axios";
import { useSelector } from "react-redux";
// import {data}  from "../../FakeData/data";
const StaffInfo=()=>{
    const locations = useSelector((state)=>state.users)
    const [isVisible,setIsVisible]=useState(false);
    const [staff, setStaff] = useState([])
    useEffect(()=>{
       const interval = setInterval(()=>{
        setIsVisible(true);
        clearInterval(interval);
        },2000)
    return ()=>{
        clearInterval(interval);
    }
    },[])

    useEffect(()=>{
        const loadstaff = async ()=>{
            try{
                const res = await axios.get(`https://nice-lime-fly-fez.cyclic.app/api/v1/auth/get`)
                // console.log(res.data)
                setStaff(res.data)
            }catch(err){
                console.log(err)
            }
        }
        loadstaff()
    },[staff])

    return (<section className="staff-container">
        {/* for  the data of the mdecical staff  */}
        <div><p className="medical-heading"><FcSearch />Healthcare Workers</p></div>
        { !isVisible && 
            <div className="loader"></div>
        }
        {
            isVisible &&
      staff.map((e,key)=>{

     return(

     <>
     {
     console.log("userLocation:",Math.trunc(locations.location1 * 10),Math.trunc(locations.location2 *10))
     
     }
     {
        console.log("medicalStaff location:",Math.trunc(e.location.long*10),Math.trunc(e.location.lat*10))
     }
          <div className="info-staff" key={key}>
          <div className="info-image">
           

            <img src={image} alt="" />
            </div>
            
            <div className="info-name">

                <h5 id="name">{e?.name}</h5>
            <p id="occupation">{e?.occupation}</p>
            </div>
            <div className="info-call">

            <a href={`tel:${e?.phNo}`} ><MdAddCall id="call-icon" /></a>
            </div>
            

        </div>
     </>
        ) })

          }
    </section>)
}
export default StaffInfo;