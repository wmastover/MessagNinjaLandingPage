import { useState } from 'react';
import './App.css';
import Video from "./assets/videoBg.mp4"
import { TextChanger } from './components/textChanger';
import { Popup } from './components/popup';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


function App() {
    const [clicked, setClicked] = useState(false)

    const clickButton = () => {

        setClicked(true)
    }
    
    return (
            <div style={{overflow: "clip", overflowY: "hidden",overflowX: "hidden", backgroundColor: "black"}}>
                
                <video className="video" src={Video} autoPlay loop muted/>
                <div className="App" >   
                    <div> 
                        <div   onClick={()=> {clickButton()}} >
                            {/* <h1 className='tbox-text'>Message Ninja Click here</h1> */}
                            {clicked?  <Popup/> : <TextChanger/> }
                            
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default App;
