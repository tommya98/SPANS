import { useEffect, useRef } from "react";

const useInterval = (callback, delay) => {
  const timerRef = useRef();
  useEffect(() => {
    timerRef.current = setInterval(callback, delay);
    return () => {
      clearInterval(timerRef.current);
    };
  });
  const handleRestart = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(callback, delay);
    }
  };
  const handleStop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  return { handleRestart, handleStop };
};

export default useInterval;
