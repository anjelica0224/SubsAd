import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const LoginSchool = () => {
  const handleOnSubmit = async () => {
    localStorage.setItem("userType", "admin");
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <SignIn onSubmit={handleOnSubmit} />
    </div>
  );
};
export default LoginSchool;

