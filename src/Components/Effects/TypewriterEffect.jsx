import React, { useEffect, useState } from "react";

function TypewriterEffect({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed]);

  return (
    <div className="inline-block font-mono whitespace-nowrap">
      {displayedText}
      <span className="inline-block bg-black ml-1 w-1 h-full animate-blink"></span>
    </div>
  );
}

export default TypewriterEffect;
