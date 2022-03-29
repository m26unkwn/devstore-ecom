import axios from "axios";
export const postUpdatedQuantity = async (
  api,
  method,
  dispatch,
  type,
  payload,
  body = null,
  header = null
) => {
  try {
    await axios({
      method: method,
      url: api,
      data: body,
      headers: header,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: type, payload: payload });
  }
};
