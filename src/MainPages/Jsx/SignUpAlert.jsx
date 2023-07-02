import React from "react";
import {FaUserMd} from 'react-icons/fa';
import '../Styles/SignUpAlert.css'
import { Link } from "react-router-dom";
const SignUpAlert=()=>{
    return (

        <div class="alert alert-warning alert-dismissible fade show" role="alert">
 <Link to={'/SignUp'}> <strong><FaUserMd id="signUp"/></strong> Enroll as a  medical professional in our esteemed healthcare mission</Link>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
        )
}
export default SignUpAlert;