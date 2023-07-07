import React, {useState } from "react";
import '../SignUp/SignUp.css'
import { useDispatch } from "react-redux";
import { saveFormData } from "../Store/slices/FormData";
import {GoAlertFill} from 'react-icons/go'
const SignUp=()=>{
 
  // const [correctPhNo,setCorrectPhNo]=useState(true);
  // const [correctOcc,setCorrectOcc]=useState(true);
  // const [image,setImage]=useState();
 const [data,setData]=useState({
    name:"",
    pNo:"",
    occupation:"",
    image:"",
  })
  const dispatch=useDispatch();
  const handleChange=(e)=>{
   const name=e.target.name;
   const value=e.target.value;
   setData({...data,[name]:value})

}

  
  
  
  const handleSubmit=(e)=>{
   e.preventDefault();
    if(data.occupation==0 ){
      setCorrectOcc(!correctOcc); 
    }

    else{
      dispatch(saveFormData(data));
      console.log(data)
    }
    
 
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
      <input type="text" className="form-control" id="floatingInput" value={data.name} name="name" onChange={handleChange}   placeholder="name"/>
      <label >Name</label>
    </div>
    <div className="form-floating">
      <input type="number" className="form-control" value={data.pNo} name="pNo" id="floatingInput" onChange={handleChange} placeholder={"phone number"} />
     
      <label >phone number</label>

    </div>
    <div className="form-floating">
      <select className="form-control" name="occupation" value={data.occupation} onChange={handleChange}>
     
          <option placeholder="public hospital"    id="option-choice" value={0} >---select-one-option---</option>
          
        <option  name="privateHos" value="private hospital"> private hospital</option>
        <option  name="publicHos" value="public hospital">public hospital </option>
        <option  name="pharmacyStore" value="pharmacy store">pharmacy store</option>
      </select>
      <label >occupation</label>
    </div>
    <div className="form-floating">
      <input type="file" accept="Image"  name="image" value={data.image}  className="form-control"  id="floatingInput" placeholder="image"  onChange={handleChange}/>
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
export default SignUp;