import React, { useState, useEffect } from 'react';

interface TimerProps {
  initialSeconds: number;
  timedOut: (timeOut: boolean) => void;
}

const Timer: React.FC<TimerProps> = ({ initialSeconds, timedOut
 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(minutes)}:${pad(remainingSeconds)}`;
  };

  if(seconds <= 0){
    timedOut(true);
  }

  return (
      <p>({formatTime(seconds)})</p>
  );
};

export default Timer;
