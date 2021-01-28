import React, { useState } from "react";

const useIncrement = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);
  const Increment = () => {
    setCount((count) => count + step);
  };
  return [count, Increment];
};

export default useIncrement;
