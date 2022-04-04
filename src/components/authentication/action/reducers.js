export function signUpReducer(state, action) {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_CNFRM_PASSWORD":
      return { ...state, confirmPassword: action.payload };
    case "SET_FIRST_NAME_ERROR":
      return { ...state, firstNameError: action.payload };
    case "SET_LAST_NAME_ERROR":
      return { ...state, lastNameError: action.payload };
    case "SET_EMAIL_ERROR":
      return { ...state, emailError: action.payload };
    case "SET_PASSWORD_ERROR":
      return { ...state, passwordError: action.payload };
    case "SET_CNFRM_PASSWORD_ERROR":
      return { ...state, cnfrmPasswordError: action.payload };
    default:
      return state;
  }
}

export function loginReducer(state, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_EMAIL_ERROR":
      return { ...state, emailError: action.payload };
    case "SET_PASSWORD_ERROR":
      return { ...state, passwordError: action.payload };
    case "LOGIN_ERROR":
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
}
