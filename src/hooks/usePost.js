import { useState } from "react";
import { instance } from "@/api/instance";

const usePost = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (payload, { onSuccess, onError, ...options } = {}) => {
    setLoading(true);
    try {
      const res = await instance.post(url, payload, options);
      setData(res?.data);
      setError(null);
      onSuccess?.(res?.data);
      return res?.data;
    } catch (error) {
      setError(error?.response?.data || error?.message);
      onError?.(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { postData, data, loading, error };
};

export default usePost;
