// useFetch.js

import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () =>{
      try {
        setIsLoading(false);
        const response = await fetch(url);
        if(response.ok) {
          const data = await response.json();
          setData(data)
        }
      } catch (error) {
            console.log(error)
            setError(error)
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
