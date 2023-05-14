import React, { useState, useEffect } from "react";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi"

export const TextChanger = () => {
  const [text, setText] = useState("Message Ninja");
  const [index, setIndex] = useState(0);

  // Array of text options
  const textOptions = [
    "GPT4 Powered Messaging",
    "1 Second Personalisation",
    "Slice Through Lead Gen",
  ];

  useEffect(() => {
    // Set up the interval
    const interval = setInterval(() => {
      setText(textOptions[index]);
      setIndex((index + 1) % textOptions.length);
    }, 5642.449); // Change every 4 seconds

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, [index, textOptions]);

  return (
    <div >
      <h1 className="unselectable">{text}</h1>
      <div className="container">
        <BiRightArrowAlt/>
        <h2 className="tbox-text unselectable">Login Here</h2>
        <BiLeftArrowAlt/>
      </div>
      
    </div>

  )
  
};
