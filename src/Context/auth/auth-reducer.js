export default function authReducer(state, action) {
  switch (action.type) {
    case "ADD_TOKEN":
      return { ...state, token: action.payload };
    default:
      return state;
  }
}
