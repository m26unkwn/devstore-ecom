import React, { useReducer } from "react";
import { Link, Navigate } from "react-router-dom";

import Input from "../Input/Input";

import { loginReducer, loginInitialData, loginValidation } from "../utils";

import "../auth.css";
import { useAuth } from "../../../Context/auth/auth-context";

const Login = () => {
  const [loginState, dispatch] = useReducer(loginReducer, loginInitialData);
  const {
    getUserAuth,
    authState: { token, authError },
  } = useAuth();

  const onChangeHandler = (e, type) => {
    dispatch({ type, payload: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();

    if (loginValidation(loginState, dispatch)) {
      getUserAuth(loginState.email, loginState.password);
    }
  };

  const onFocusHandler = (type) => {
    dispatch({ type, payload: false });
  };

  const testLoginHandler = (e) => {
    e.preventDefault();
    getUserAuth("adarshbalika@gmail.com", "Adarshbalika1!");
  };

  return (
    <>
      {token ? (
        <Navigate to='/' replace />
      ) : (
        <section className='auth-wrapper flex ai-center jc-center'>
          <div className='card-container auth-card'>
            <div className='auth-head flex flex-col flex-gap jc-center ai-center'>
              <h3 className='head-title'>Login</h3>

              <div className='head-desc flex flex-row jc-between flex-gap'>
                <span>Need an account ? </span>
                <Link to='/signup' className='link-btn'>
                  Signup
                </Link>
              </div>
            </div>

            <form
              className='form-wrapper flex flex-col ai-center jc-center'
              onSubmit={(e) => loginHandler(e)}>
              <Input
                type='email'
                label='Email Address'
                placeHolder='JhonDoe@example.com'
                onChangeHandler={onChangeHandler}
                onFocusHandler={onFocusHandler}
                value={loginState.email}
                error={loginState.emailError}
                onFocusParam='SET_EMAIL_ERROR'
                onChangeParam='SET_EMAIL'
                errorMsg='Enter valid email address'
              />
              <Input
                type='password'
                label='Password'
                placeHolder='password'
                onChangeHandler={onChangeHandler}
                onFocusHandler={onFocusHandler}
                onChangeParam='SET_PASSWORD'
                onFocusParam='SET_PASSWORD_ERROR'
                value={loginState.password}
                error={loginState.passwordError}
                eye={true}
                errorMsg='enter Valid Password'
              />
              <div
                style={{ marginBottom: "2rem" }}
                className='form-action auth-action'>
                <button onClick={loginHandler} className='btn'>
                  Login In
                </button>
                <button
                  style={{ marginTop: "2rem" }}
                  onClick={testLoginHandler}
                  className='btn outline-primary'>
                  Test Login
                </button>
                {authError && (
                  <div style={{ padding: " 1rem 0" }}>
                    <h4 className='error-color'>{authError}!</h4>
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
