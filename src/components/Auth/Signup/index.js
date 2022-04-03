import React, { useReducer } from "react";
import { Navigate } from "react-router-dom";
import "../auth.css";

import { Link } from "react-router-dom";

import { signupInitialData, signUpReducer, signupValidation } from "../action";

import Input from "../Input/Input";
import { useAuth } from "../../../Context/auth/auth-context";

const Signup = () => {
  const [signupState, dispatch] = useReducer(signUpReducer, signupInitialData);
  const {
    getUserAuth,
    authState: { token, authError },
  } = useAuth();

  const onChangeHandler = (e, type) => {
    dispatch({ type, payload: e.target.value });
  };

  const signupHandler = (e) => {
    e.preventDefault();
    if (signupValidation(signupState, dispatch)) {
      getUserAuth(
        "api/auth/signup",
        signupState.email,
        signupState.password,
        signupState.firstName,
        signupState.lastName
      );
    }
  };

  const onFocusHandler = (type) => {
    dispatch({ type, payload: false });
  };

  return (
    <>
      {token ? (
        <Navigate to='/' replace />
      ) : (
        <section className='auth-wrapper flex ai-center jc-center'>
          <div className='card-container auth-card'>
            <div className='auth-head flex flex-col jc-center ai-center'>
              <h3 className='head-title'>Sign Up</h3>
            </div>

            <form className='form-wrapper flex flex-col ai-center jc-center'>
              <Input
                error={signupState.firstNameError}
                value={signupState.firstName}
                label='First Name'
                type='name'
                placeholder='Jhon'
                onChangeHandler={onChangeHandler}
                onFocusHandler={onFocusHandler}
                onChangeParam='SET_FIRST_NAME'
                onFocusParam='SET_FIRST_NAME_ERROR'
                errorMsg='Enter Valid First Name'
              />
              <Input
                error={signupState.lastNameError}
                value={signupState.lastName}
                label='Last Name'
                type='name'
                placeholder='Doe'
                onChangeHandler={onChangeHandler}
                onFocusHandler={onFocusHandler}
                onChangeParam='SET_LAST_NAME'
                onFocusParam='SET_LAST_NAME_ERROR'
                errorMsg='Enter Valid Last Name'
              />
              <Input
                error={signupState.emailError}
                value={signupState.email}
                label='Email Address'
                type='email'
                placeholder='jhonDoe@example.com'
                onChangeHandler={onChangeHandler}
                onFocusHandler={onFocusHandler}
                onChangeParam='SET_EMAIL'
                onFocusParam='SET_EMAIL_ERROR'
                errorMsg='  Enter Valid Email Address'
              />
              <Input
                error={signupState.passwordError}
                value={signupState.password}
                label='Password'
                type='password'
                placeholder='password'
                onChangeHandler={onChangeHandler}
                onFocusHandler={onFocusHandler}
                onChangeParam='SET_PASSWORD'
                onFocusParam='SET_PASSWORD_ERROR'
                errorMsg='Password length should contain minimum 8 characters (at least
                one capital, small letter and number)'
                eye={true}
              />
              <Input
                error={signupState.cnfrmPasswordError}
                value={signupState.confirmPassword}
                label='Confirm Password'
                type='password'
                placeholder='confirm password'
                onChangeHandler={onChangeHandler}
                onFocusHandler={onFocusHandler}
                onChangeParam='SET_CNFRM_PASSWORD'
                onFocusParam='SET_CNFRM_PASSWORD_ERROR'
                errorMsg='Password does not match'
                eye={true}
              />
              <div className='form-action auth-action'>
                <button onClick={signupHandler} className='btn'>
                  Sign Up
                </button>
              </div>
              {authError && (
                <div style={{ padding: " 1rem 0" }}>
                  <h4 className='error-color'>{authError}!</h4>
                </div>
              )}
              <div className='head-desc flex flex-row jc-start auth-action flex-gap'>
                <span>Already have an account ? </span>
                <Link to='/login' className='link-btn'>
                  Login here
                </Link>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default Signup;
