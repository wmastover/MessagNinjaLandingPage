import React, { useState, useEffect } from "react";
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";
import { GoogleSignInButton } from "./googleSignInButton";

export const Popup = () => {
  

  // Array of text options


  return(
    <div className="transparent-box">
        <h1 className="pageSubTitle unselectable">Login / Signup</h1>
        <GoogleSignInButton/>
    </div>
  )
};
