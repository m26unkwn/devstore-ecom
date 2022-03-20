import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (api, method = "get", body = null, header = null) => {
  const [data, setData] = useState(0);

  useEffect(() => {
    (async function () {
      try {
        let response = await axios({
          method: method,
          url: api,
          data: body,
          headers: header,
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
        setData(null);
      }
    })();
  }, [api, body, header, method]);

  return [data];
};

export default useAxios;
