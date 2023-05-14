import React, { useState, useEffect } from "react";

export const TextChanger = () => {
  const [text, setText] = useState("Message Ninja");
  const [index, setIndex] = useState(0);

  // Array of text options
  const textOptions = [
    "GPT4 powered messaging",
    "1 second personalisation",
    "Slice through lead gen",
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

  return <h1 className="tbox-text">{text}</h1>;
};
