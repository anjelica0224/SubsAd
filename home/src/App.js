import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import LoginPage from './components/LoginPage';
import Signin from './login/Signin';
import Signup from './login/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="vh-100 d-flex flex-column">
                <Header />
                <HeroSection />
              </div>
              <AboutSection />
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/Signin" element={<Signin />} />
        <Route path="/login/Signup" element={<Signup />} />

      </Routes>
    </Router>
  );
};


export default App;
