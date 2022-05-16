import { useState, useEffect, useCallback } from "react";

const UseFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const fetchURL = await fetch(url);
    const response = await fetchURL.json();

    setLoading(false);
    setData(response);
  }, [url]);

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, []);

  return { loading, data };
};

export default UseFetch;
