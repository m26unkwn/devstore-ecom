import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (api, method = "get", body = null, header = null) => {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        let response = await axios({
          method: method,
          url: api,
          data: body,
          headers: header,
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        setData(null);
      }
    })();
  }, []);

  return [data, loading, error];
};

export default useAxios;
