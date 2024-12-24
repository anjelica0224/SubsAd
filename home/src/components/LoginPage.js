import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="text-center">
        <h1 className="mb-4">Login to GuruLink</h1>
        <button
          className="btn btn-primary btn-lg mb-3 d-block w-100"
          onClick={() => navigate('/login/Signin')}
        >
          Already a user? Click to Login!
        </button>
        <button
          className="btn btn-secondary btn-lg d-block w-100"
          onClick={() => navigate('/login/Signup')}
        >
          Sign Up to create account
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
