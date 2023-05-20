import React from "react";
import { BsClipboard } from "react-icons/bs"
import {TfiReload} from "react-icons/tfi"

type TextChangerProps = {
  index: number;
};

export const TextChanger: React.FC<TextChangerProps> = ({ index }) => {
  const textOptions = [
    "Hey Bill! Impressive journey from Microsoft to the Bill & Melinda Gates Foundation!",
    "Hey @MrBeast, you are doing amazing work opening homeless shelters/food banks.",
    "Hey @ShaanVP, really enjoyed reading your thread on semi-controversial topics!",  ];

  return (
    <div className='chromeExtension'>
      <h2 className='heading unselectable'>Message Ninja </h2>
      <div className='textBox' >
        <p className='unselectable'>{textOptions[index]}</p>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
        <button className="button" >
          <BsClipboard />
        </button>
        <button className="button" >
          <TfiReload />  
        </button> 
      </div>
    </div>
  )
};




