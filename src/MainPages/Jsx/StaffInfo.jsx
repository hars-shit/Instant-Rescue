import React from "react";
import {MdAddCall} from 'react-icons/md'
import '../Styles/Staff.css'
const StaffInfo=()=>{
    return (<section className="staff-container">
        {/* for  the data of the mdecical staff  */}
        <div><p className="medical-heading">Available Medical workforce</p></div>
        <div className="info-staff">
            <div className="info-image">

            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mEma0ZcipymPAHIYoIuFiAHaJa%26pid%3DApi&f=1&ipt=5264d993ea346dd08c643e823a2f698578ab9f651a72422b784970e4250c6b64&ipo=images" alt="" />
            </div>
            <div className="info-name">

            <h5>Kartik Doctor</h5>
            <p id="occupation">Masters in Allo ki Sabji</p>
            </div>
            <div className="info-call">

            <a href="tel:9520593613"><MdAddCall id="call-icon"/></a>
            </div>

        </div>
    </section>)
}
export default StaffInfo;