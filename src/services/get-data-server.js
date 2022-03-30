import axios from "axios";
export const getDataFromServer = async (
  api,
  method,
  dispatch,
  type,
  result,
  setLoading = null,
  body = null,
  header = null
) => {
  try {
    if (setLoading) {
      setLoading(true);
    }
    let response = await axios({
      method: method,
      url: api,
      data: body,
      headers: header,
    });
    if (response.status === 200 || response.status === 201) {
      if (setLoading) {
        setLoading(false);
      }
      dispatch({ type: type, payload: response.data[result] });
    }
  } catch (error) {
    console.log(error);
    if (setLoading) {
      setLoading(false);
    }
  }
};
