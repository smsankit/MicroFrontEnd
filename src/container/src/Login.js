import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./Auth";  
import DOMPurify from "dompurify"; 
import Seeder from "./Seeder";
import "./Login.css";
import umbrellaImage from './assets/ins_umb.png'; 

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    Seeder.initializeLocalStorage();
    
    const loggedInUserId = localStorage.getItem("LoggedInUserId");
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    
    if (loggedInUserId && isAuthenticated === "true") {
      navigate("/landingpage");
    }
  }, [navigate]);

  
  const sanitizeInput = (input) => {
    return input.replace(/[<>]/g, ""); 
  };

  
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSignIn = () => {
    
    const sanitizedEmail = sanitizeInput(email);

   
    if (!validateEmail(sanitizedEmail)) {
      setErrorMessage("Please enter a valid email address.");
      setTimeout(() => {
        setErrorMessage("");  
      }, 3000);
      return;
    }

  
    const error = login(sanitizedEmail, setIsAuthenticated);

    if (error) {
      const sanitizedError = DOMPurify.sanitize(error);
      setErrorMessage(sanitizedError);

      setTimeout(() => {
        setErrorMessage("");  
      }, 3000);
    } else {
      console.log("Login successful. Navigating to landing page.");
      navigate("/landingpage");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src={umbrellaImage} alt="Insurance" />
        </div>
        <div className="login-form">
          <h2 className="text-center mb-4">Welcome Back!</h2>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            onClick={handleSignIn}
            className="btn btn-primary w-100"
          >
            Sign In
          </button>

          {errorMessage && (
            <div 
              className="alert alert-danger mt-3" 
              role="alert"
              dangerouslySetInnerHTML={{ __html: errorMessage }} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
