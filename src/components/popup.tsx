import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import { GoogleSignInButton } from "./googleSignInButton";

export const Popup = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  const token = useSelector((state: RootState) => state.token.token)
  // Array of text options


  return (
    <div>
      {user ? (
        <div className="transparent-box">
          <h1 className="pageSubTitle unselectable">Welcome back, {user.displayName}!</h1>
          <p style={{color:"white", fontWeight:"bold"}}>Open the message ninja chrome extension to logIn</p>
          <div style={{display: "none"}} id="authenticationToken">{token}</div>
          <div style={{display: "none"}} id="apiKey">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</div>
        </div>
      ) : (
        <div className="transparent-box">
          <h1 className="pageSubTitle unselectable">Login / Signup</h1>
          <GoogleSignInButton />
        </div>
      )}
    </div>
  );
};
