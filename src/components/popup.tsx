import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import { GoogleSignInButton } from "./googleSignInButton";

export const Popup = () => {
  const user = useSelector((state: RootState) => state.auth.user)

  // Array of text options


  return (
    <div>
      {user ? (
        <div className="transparent-box">
          <h1 className="pageSubTitle unselectable">Welcome back, {user.displayName}!</h1>
          
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
