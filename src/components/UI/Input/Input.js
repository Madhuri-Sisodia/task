import React from "react";
import classes from "./Input.module.css";
const Input = ({
  id,
  placeholder,
  type,
  register,
  errorMessage,
  value,
}) => {
  return (
    <div className={classes.inputs}>
      <input
        style={{
          borderRadius: "60px",
          border: "1px solid",
          padding: "10px 15px",
        }}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      />

      <span className={classes.error}>{errorMessage}</span>
    </div>
  );
};

export default Input;
