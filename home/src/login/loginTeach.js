import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const LoginTeacher = () => {
  const handleOnSubmit = async () => {
    // Optional: Pass `userType` to the backend or store it in session storage
    localStorage.setItem("userType", "subs");
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <SignIn onSubmit={handleOnSubmit}/>
    </div>
  );
};

export default LoginTeacher;
