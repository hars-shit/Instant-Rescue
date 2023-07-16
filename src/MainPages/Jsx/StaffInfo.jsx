import React, { useEffect, useState } from "react";
import { MdAddCall } from 'react-icons/md'
import '../Styles/Staff.css'
import { data } from "../../FakeData/data";
import { FcSearch } from 'react-icons/fc'
import axios from "axios";
import { useSelector } from "react-redux";
// import {data}  from "../../FakeData/data";
const StaffInfo = () => {
    const user = useSelector((user) => user.users)

    const [isVisible, setIsVisible] = useState(false);
    const [staff, setStaff] = useState([])
    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(true);
            clearInterval(interval);
        }, 10000)
        return () => {
            clearInterval(interval);
        }
    }, [])

    useEffect(() => {
        const loadstaff = async () => {
            try {
                const res = await axios.get(`https://nice-lime-fly-fez.cyclic.app/api/v1/auth/get`)
                // console.log(res.data)
                setStaff(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        loadstaff()
    }, [staff])

    let filteredStaff = staff.filter((l) => {
        const newlong = parseFloat(l?.location?.long);
        const newlat = parseFloat(l?.location?.lat);
        return (
            newlong.toFixed(1) === user.location1.toFixed(1) &&
            newlat.toFixed(1) === user.location2.toFixed(1)
        )
    })

    return (<section className="staff-container">
        {/* for  the data of the mdecical staff  */}
        <div><p className="medical-heading"><FcSearch />Healthcare Workers</p></div>
        {!isVisible &&
            <div className="loader"></div>
        }

        {isVisible && filteredStaff.length === 0 && (
            <span>No doctor found</span>
        )}

        {
            isVisible && filteredStaff.length > 0 &&(
                filteredStaff.map((e, key) => {
                    return (
                        <div className="info-staff" key={key}>
                            <div className="info-image">


                                <img src={e?.image} alt="" />
                            </div>

                            <div className="info-name">

                                <h5 id="name">{e?.name}</h5>
                                <p id="occupation">{e?.occupation}</p>
                            </div>
                            <div className="info-call">

                                <a href={`tel:${e?.phNo}`} ><MdAddCall id="call-icon" /></a>
                            </div>


                        </div>
                    )
                })

            )}
    </section>)
}
export default StaffInfo;