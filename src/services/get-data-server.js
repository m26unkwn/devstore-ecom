import axios from "axios";
export const getDataFromServer = async (
  api,
  method,
  dispatch,
  type,
  navigate = null,
  to = null,
  body = null,
  header = null
) => {
  try {
    let response = await axios({
      method: method,
      url: api,
      data: body,
      headers: header,
    });
    if (response.status === 200 || response.status === 201) {
      dispatch({ type: type, payload: response.data.products });
      navigate(to);
    }
  } catch (error) {
    console.log(error);
  }
};
