import React from "react";

import { Link } from "react-router-dom";

import '../Styles/Footer.css'
const Footer=()=>{
    return (
        <>
       
        <div class="b-example-divider"></div>
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Home</Link></li>
      <li class="nav-item"><Link to="/Features" class="nav-link px-2 text-body-secondary">Features</Link></li>
      <li class="nav-item"><Link to="/APIs" class="nav-link px-2 text-body-secondary">APIs</Link></li>
      <li class="nav-item"><Link to="/FAQs" class="nav-link px-2 text-body-secondary">FAQs</Link></li>
      <li class="nav-item"><Link to="https://github.com/hars-shit/Instant-Rescue" class="nav-link px-2 text-body-secondary">About</Link></li>
    </ul>
    <p class="text-center text-body-secondary">© 2023 insta-rescue, Inc</p>
  </footer>
  </>

    )
}
export default Footer;