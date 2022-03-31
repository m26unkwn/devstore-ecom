import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (api, method = "get", body = null, header = null) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        let { data } = await axios({
          method: method,
          url: api,
          data: body,
          headers: header,
        });
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setData(null);
        setLoading(false);
      }
    })();
  }, [api, body, header, method]);

  return [data, loading];
};

export default useAxios;
