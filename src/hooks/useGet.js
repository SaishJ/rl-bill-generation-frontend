import { instance } from "@/api/instance";
import { useEffect, useState } from "react";

const useGet = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await instance.get(url, options);
        if (isMounted) {
          setData(res?.data);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setError(error?.response?.data || error?.message);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

export default useGet;
