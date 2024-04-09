import  { useState, useEffect, useRef } from 'react';

const useTypewriter = (text, speed) => {
  const [displayText, setDisplayText] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    let observer;
    let currentIndex = 0;
    let intervalId;

    const typewriterAnimation = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    };

    const startTypewriter = () => {
      intervalId = setInterval(typewriterAnimation, speed);
      return intervalId;
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          startTypewriter();
        }
      });
    };

    observer = new IntersectionObserver(handleIntersect);
    observer.observe(containerRef.current);

    return () => {
      if (observer) observer.disconnect();
      clearInterval(intervalId);
    };
  }, [text, speed]);

  return { displayText, containerRef };
};

export default useTypewriter;
