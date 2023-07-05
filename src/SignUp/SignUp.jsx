import React, { useEffect, useState } from "react";
import '../SignUp/SignUp.css'
const SignUp=()=>{
  const [medicLong,setMedicLong]=useState();
  const [medicLet,setMedicLet]=useState();
 const handleMedicLocation=(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      setMedicLong(position.coords.longitude);
      setMedicLet(position.coords.latitude);

    })
  })
  useEffect(()=>{
    handleMedicLocation();
  },[])
    return(
        <div className="signUp-container">
<main className="signUp-main">
          {/* <img src="src/assets/th1.png" alt="" /> */}
 
  <form className="form-container">
    
    <h1 className="signUp-heading">Register Account</h1>

    <div className="form-floating">
      <input type="text" className="form-control" id="floatingInput" placeholder="Dr. Kamlesh Bhatt" />
      <label >Name</label>
    </div>
    <div className="form-floating">
      <input type="number" className="form-control" id="floatingInput" placeholder="phone number"  />
      <label >phone number</label>
    </div>
    <div className="form-floating">
      <select className="form-control">
        <option placeholder="public hospital" id="option-choice" >---select-one-option---</option>
        <option>private hospital</option>
        <option  >public hospital </option>
        <option >pharmacy store</option>
      </select>
      <label >occupation</label>
    </div>
    <div className="form-floating">
      <input type="file" className="form-control" id="floatingInput" placeholder="image"  />
      <label >image </label>
    </div>
   

    <div className="form-floating">

    <button className="btn btn-primary w-100 py-2 submit-btn" type="submit">Sign in</button>
    </div>

  </form>
</main>


    

</div>
    )
}
export default SignUp