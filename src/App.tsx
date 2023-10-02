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
import { Helmet } from 'react-helmet'


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
    <div className='yellowBox'>
      {/* this edits the name and icon displayed on the chrome tab */}
      <Helmet>
        <title>Message Ninja</title>
      </Helmet>
      
      <div className="App">

        {user?  <LogoutButton setClicked={setClicked}/> : <LogInButton setClicked={setClicked}/> }
       
        
        <Popup />

      </div>
    </div>
  );
}

export default App;
