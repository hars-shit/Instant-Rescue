import React from "react";
import '../SignUp/SignUp.css'
const SignUp=()=>{
    return(
        <div className="d-flex align-items-center py-4 bg-body-tertiary">
  
<main className="form-signin w-100 m-auto">
  <form className="form-container">
    
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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

    
    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>

  </form>
</main>


    

</div>
    )
}
export default SignUp