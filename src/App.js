// App.js
import React from "react";
import SignIn from "./SignIn";

<<<<<<< HEAD
const App = () => {
  return (
    <div>
    
      <SignIn />
    </div>
=======
import { useNavigate } from "react-router-dom";

import "./logo.svg"



const SignIn = () => {
  return (
    <main>
      <div>
       
        <div className="image-container">
          <img className="image" src= "./logo.svg" alt="Logo" />
        </div>
        <div className="container">
          <div className="signin">
            <h2>Sign In</h2>
            <h4>Sign in to your Account</h4>
          </div>
          <div className="content">
            <form>
              <label htmlFor="username">Username or Email address</label>
              <input type="text" id="username" name="username" required />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />

              <p className="forgot">
                <a href="#">Forgot password?</a>
              </p>
              <button type="submit" className="signin-container green">
                Sign In
              </button>
              <h4>
                Don't have an account? <a href="#">Register here</a>
              </h4>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
      
      </div>
    </main>
>>>>>>> 1e1b26eef5e3653c2b06e3fcd5aea26da5638d8f
  );
};

export default App;
