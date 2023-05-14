import './App.css';
import Video from "./assets/videoBg.mp4"
import { TextChanger } from './components/textChanger';


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


function App() {



    
    return (
            <div style={{overflow: "clip", overflowY: "hidden",overflowX: "hidden", backgroundColor: "black"}}>
                
                <video src={Video} autoPlay loop muted
                style={{
                    objectFit: "cover",
                    width: "110w",
                    height: "110vh",
                    filter: "blur(20px)",
                    

                }}
                />
                <div className="App" 
                style = {{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    display: "flex",
                    flexDirection: "column",
                    objectFit: "fill",
                    justifyContent: "center",
                    alignItems: "center",
                    }} >
                        
                    <div className='transparent-box'> 
                        <div>
                            {/* <h1 className='tbox-text'>Message Ninja Click here</h1> */}
                            <TextChanger/>
                            
                        </div>
                    </div>
                    {/* <AppOverlay />    */}
                    
                </div>
            </div>
    );
}

export default App;
