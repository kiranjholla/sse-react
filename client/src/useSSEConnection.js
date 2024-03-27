import { useEffect, useState } from 'react';

const useSSE = (url, deps) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const listner = event => {
      console.log(event);
      setData(event.data);
    };

    // Create SSE object
    const es = new EventSource(url);

    // Listen for message events from server
    es.addEventListener('message', listner);
    return () => es.removeEventListener('message', listner);
  }, [...deps, url]);

  return data
};


export default useSSE;
