import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import {Link} from "react-router-dom";
const Signin = () => {
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <SignIn />
      <div className="text-sm mt-2">
        <p>Forgot Password?</p>
        <Link to="./forget-password" className="text-blue-400 ">
          Reset here
        </Link>
      </div>
    </div>
  );
};
export default Signin;

