import React, { useState } from "react";

const useToggle = (init = true) => {
  const [value, setValue] = useState(init);
  const toogle = () => {
    setValue(!value);
  };
  return [value, toogle];
};

export default useToggle;
