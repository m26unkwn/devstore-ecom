const signupInitialData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  firstNameError: false,
  lastNameError: false,
  emailError: false,
  passwordError: false,
  cnfrmPasswordError: false,
};

const loginInitialData = {
  email: "",
  password: "",
  passwordError: false,
  emailError: false,
  loginError: "",
};
export { loginInitialData, signupInitialData };
