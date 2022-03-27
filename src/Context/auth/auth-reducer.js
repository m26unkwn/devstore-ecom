export default function authReducer(state, action) {
  switch (action.type) {
    case "ADD_TOKEN":
      return { ...state, token: action.payload };
    case "ADD_USER_DATA":
      return { ...state, userDetails: action.payload };
    case "ADD_AUTH_ERROR":
      return {
        ...state,
        authError: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        token: "",
      };
    default:
      return state;
  }
}
