import { useEffect, useState } from "react";
import useIncrement from "./useIncrement";

const useAutoIncrement = (initialValue = 0, step = 1) => {
  const [count, Increment] = useIncrement(initialValue, step);
  useEffect(() => {
    const timer = setInterval(() => {
      Increment();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return [count];
};

export default useAutoIncrement;
