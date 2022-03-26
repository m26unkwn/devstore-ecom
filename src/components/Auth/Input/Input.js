import React, { useState } from "react";

import { Eye, disableEye } from "../../../assets";

const Input = (props) => {
  const {
    error,
    label,
    value,
    placeholder,
    type,
    onChangeHandler,
    onFocusHandler,
    errorMsg,
    onChangeParam,
    onFocusParam,
    eye,
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  const isVisibleHandler = (e) => {
    e.preventDefault();
    if (eye) {
      setIsVisible(!isVisible);
    }
  };

  return (
    <>
      <div className={`input-field relative ${error ? "input-error" : ""}`}>
        <label htmlFor={type} value={type}>
          {label}
          <span className='imp-input'>*</span>
        </label>

        <input
          placeholder={placeholder}
          type={isVisible ? "text" : type}
          value={value}
          onChange={(e) => onChangeHandler(e, onChangeParam)}
          onFocus={() => onFocusHandler(onFocusParam)}
        />
        {eye && value.length > 1 && (
          <button className='btn btn-icon eye' onClick={isVisibleHandler}>
            {isVisible ? (
              <img src={disableEye} alt='hide_password' />
            ) : (
              <img src={Eye} alt='show_password' />
            )}
          </button>
        )}
      </div>
      {error && <span className='error-color alert-text'>{errorMsg}.</span>}
    </>
  );
};

export default Input;
