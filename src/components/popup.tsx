import React, { useState, useEffect } from "react";
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";

export const Popup = () => {
  

  // Array of text options


  return(
    <div className="transparent-box">
        <h1 className="tbox-text unselectable">Opened</h1>
        <SignupForm/>
        <LoginForm/>
    </div>
  )
};
