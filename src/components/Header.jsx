import React, { useEffect } from "react";
import useAutoIncrement from "../hooks/useAutoIncrement";
import useIncrement from "../hooks/useIncrement";

const Header = () => {
  const [count, Increment] = useIncrement(10, 3);
  const [autoCount] = useAutoIncrement(0, 0.5);
  return (
    <div>
      <h1>Hello counter {count}</h1>
      <h1>Hello auto counter {autoCount}</h1>
      <button onClick={Increment}>Increment</button>
    </div>
  );
};

export default Header;
