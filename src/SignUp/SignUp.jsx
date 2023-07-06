import React, {useState } from "react";
import '../SignUp/SignUp.css'
import { useDispatch } from "react-redux";
import FormData, { saveFormData } from "../Store/slices/FormData";
const SignUp=()=>{
 
 
 const [data,setData]=useState({
    name:"",
    pNo:"",

  })
  const dispatch=useDispatch();
  const handleChange=(e)=>{
   const name=e.target.name;
   const value=e.target.value;
   setData({...data,[name]:value})
  }
  const handleSubmit=(e)=>{
   e.preventDefault();
   dispatch(saveFormData(data));
   console.log(data)
  //  saveFormData(data)
  console.log('hello')
  }

    return(
        <div className="signUp-container">
<main className="signUp-main">
          {/* <img src="src/assets/th1.png" alt="" /> */}
 
  <form className="form-container">
    <div>

    <h1 className="signUp-heading"><p id="heading">Register Account</p></h1>
    <p className="minor-heading">Only for Healthcare Workers</p>
    </div>

    <div className="form-floating">
      <input type="text" className="form-control" id="floatingInput" value={data.name} name="name" onChange={handleChange}  placeholder="Dr. Kamlesh Bhatt" />
      <label >Name</label>
    </div>
    <div className="form-floating">
      <input type="number" className="form-control" value={data.pNo} name="pNo" id="floatingInput" onChange={handleChange}  placeholder="phone number"  />
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
      <input type="file" className="form-control"  id="floatingInput" placeholder="image"  />
      <label >image </label>
    </div>
   

    <div className="form-floating">

    <button className="btn btn-primary w-100 py-2 submit-btn"  onClick={handleSubmit}>Sign in</button>
    </div>

  </form>
</main>


    

</div>
    )
}
export default SignUp