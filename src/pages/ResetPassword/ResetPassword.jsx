import React from 'react';
import {Link} from 'react-router-dom'
import './ResetPassword.css'
import Hotel1 from './Hotel1.jpeg';
const ResetPassword=()=>{
  return(

    <>
    <div className="maincontainer">
    <div className="containertwo">
    <div className="overlay-containertwo">
        <div className="overlaytwo">
          <img src={Hotel1}/>
         
        </div>
        </div>
    <div className="form">
        <form>
          <h6>RENTEA</h6>
          <p className="para">Reset Password</p>
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="ConfirmPassword" />
          <button  className="signin" type="submit">Reset Now</button>
          
        </form>
      </div>
      </div>
</div>
    
    </>)
}
export default ResetPassword;