import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({ items: [], loading: true });
  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setState({ items: data, loading: false });
      } else {
        setState((s) => ({ ...s, loading: false }));
      }
    })();
  }, [url]);
  return [state.items, state.loading];
};

export default useFetch;
