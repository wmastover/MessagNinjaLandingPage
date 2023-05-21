import { useState, useRef, useEffect } from 'react';
import './App.css';
import Video from "./assets/videoBg.mp4"
import { TextChanger } from './components/textChanger';
import { Popup } from './components/popup';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import React from 'react';
import { LogInButton } from './components/logInButton';
import { LogoutButton } from './components/logOutButton';


const App = (): JSX.Element => {
  const [clicked, setClicked] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const user = useSelector((state: RootState) => state.auth.user);
  const tolerance = 0.1; // Let's assume the tolerance is 0.1 seconds

  const clickLoginButton = () => {
    setClicked(true)
  }

  const clickLogOutButton = () => {
    setClicked(false)
  }

  useEffect(() => {
    const videoEl = videoRef.current;

    if (!videoEl) return; 

    const checkForLoop = () => {
      // If video has looped to start (considering the tolerance)
      if (videoEl.currentTime <= tolerance) {
        setIndex(prevIndex => (prevIndex + 1) % 3);
      }
    }

    videoEl.addEventListener('timeupdate', checkForLoop);

    return () => videoEl.removeEventListener('timeupdate', checkForLoop);

  }, []);

  return (
    <div style={{ overflow: "clip", overflowY: "hidden", overflowX: "hidden", backgroundColor: "black" }}>
      <video className="video" src={Video} autoPlay loop muted ref={videoRef} />
      <div className="App">
        <h1 className='pageTitle'>Message Ninja</h1>
        <h3 className='pageSubTitle'>Personalised messages in one click</h3>
        {user?  <LogoutButton setClicked={setClicked}/> : <LogInButton setClicked={setClicked}/> }
        {/* <button className='topRightButton' onClick={clickButton}>Log In</button> */}
        <div>
          <div onClick={() => { clickLoginButton() }} >
            {clicked ? <Popup /> : <TextChanger index={index} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
