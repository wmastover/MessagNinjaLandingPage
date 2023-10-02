import React from "react";
import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import { GoogleSignInButton } from "./googleSignInButton";
import { useEffect,useState } from "react";
import { LoadingSpinner } from "./loadingSpinner";
import { LoadingLine } from "./linkLine";

export interface AnotherCustomEventData {
  data: {
      action: string;
      payload: any; // You can replace 'any' with a specific type if needed
  };
}

export const Popup = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  const token = useSelector((state: RootState) => state.token.token)

  // const [done, setDone] = useState<string>("Please wait- passing your login to the chrome extension");
  // Array of text options

  const [done, setDone] = useState<boolean>(false)

  useEffect(() => {
    console.log("rerunning use effect")

    //runs when event is recieved by the content script
    const handleEvent = (e: CustomEvent<AnotherCustomEventData>) => { 
      console.log("handleEvent")
      if (e.detail.data.action == "returnLoggedIn") {
        console.log("webpage recieved this returnLoggedIn")
        if (e.detail.data.payload == "success") {
          setDone(true)
        }}
    }

    window.addEventListener('contentScriptEvent', handleEvent as EventListener);

    // this apparently stops memory leak
    return () => window.removeEventListener('contentScriptEvent', handleEvent as EventListener);
  }, []);

  return (
    <>
      {user ? (
        <>
          <div className="pageSubTitle unselectable">Welcome back, {user.displayName}!</div>
            
              <div className="centered-div">
              {done?
              
              <div className="centered-div">
                <LoadingLine/>
              </div>
              :
              <div>
                <LoadingSpinner/>
                <p style={{color:"black", fontWeight:"bold", fontSize:"30px"}}>
                  Please wait- passing your login to the chrome extension
                </p>
              </div>
              }
              </div>
            
              
            
          <div style={{display: "none"}} id="authenticationToken">{token}</div>
        </>
      ) : (
        <>
          <div className="pageSubTitle unselectable">Login / Signup</div>
          <GoogleSignInButton />
        </>
      )}
    </>
  );
};
