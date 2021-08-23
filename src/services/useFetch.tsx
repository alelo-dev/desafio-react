import React, { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null);

      response = await fetch(url, options);
      json = await response.json();

      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      return { response, json };
    }
  }, []);

  return { data, error, request };
};

export default useFetch;
