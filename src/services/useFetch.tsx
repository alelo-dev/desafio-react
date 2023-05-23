import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, options) => {
    try {
      setError(null);
      const response = await fetch(url, options);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const jsonData = await response.json();
      setData(jsonData);

      return { response, json: jsonData };
    } catch (err: any) {
      setError(err.message);
      return { response: null, json: null };
    }
  }, []);

  return { data, error, request };
};

export default useFetch;