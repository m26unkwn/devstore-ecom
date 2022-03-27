import axios from "axios";
export const getDataFromServer = async (
  api,
  method,
  dispatch,
  type,
  result,
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
      console.log(response);
      dispatch({ type: type, payload: response.data[result] });
    }
  } catch (error) {
    console.log(error);
  }
};
