import React, {useState } from "react";
import '../SignUp/SignUp.css'
import { useDispatch, useSelector } from "react-redux";
import { saveFormData } from "../Store/slices/FormData";
import {GoAlertFill} from 'react-icons/go'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp=()=>{
  // const [correctPhNo,setCorrectPhNo]=useState(true);
  // const [correctOcc,setCorrectOcc]=useState(true);
  // const [image,setImage]=useState();
  const user = useSelector((user)=>user.users)
  const navigate = useNavigate()
  const[err, setErr] = useState(false)
 const [data,setData]=useState({
    name:"",
    phNo:"",
    occupation:"",
    location:{
      long:`${user.location1}`,
      lat:`${user.location2}`
  }
  })
  const dispatch=useDispatch();

  const handleChange=(e)=>{
   const name=e.target.name;
   const value=e.target.value;
   setData({...data,[name]:value})

}

  
  
  
  const handleSubmit= async (e)=>{
   e.preventDefault();
    if(data.occupation==0 ){
      setCorrectOcc(!correctOcc); 
    }
    // else{
    //   dispatch(saveFormData(data));
    //   console.log(data)
    // }
    console.log(data)

    try{
      const response = await axios.post(`https://plum-tricky-prawn.cyclic.app/api/v1/auth/register`,data)
      console.log(response)
      navigate('/')
    }catch(err){
      console.log(err)
      setErr(true)
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
      <input type="number" className="form-control" value={data.phNo} name="phNo" id="floatingInput" onChange={handleChange} placeholder={"phone number"} />
     
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

    <button className="btn btn-primary w-100 py-2 submit-btn"  onClick={handleSubmit}>Sign in</button>
    </div>
    {err && <p style={{color:"tomato"}}>something went wrong please try again</p>}
  </form>
</main>


    

</div>
    )
}
export default SignUp;