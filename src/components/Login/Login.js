import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../UI/Input/Input";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const schema = yup.object({
  email: yup
    .string()
    .required("Email Name must not be empty")
    .email("Email must be valid"),
  password: yup.string().min(3, "Password must be atleast 8 characters"),
});

const Login = (props) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginHandler = (data) => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    console.log(data);
    if (
      data.email === loggedUser.email &&
      data.password === loggedUser.password
    ) {
      navigate("/home");
    } else {
      alert("Wrong Email or Password");
    }
    reset();
  };

  return (
    <div className={classes.Login}>
      <form onSubmit={handleSubmit(loginHandler)}>
        <Input
          type="email"
          id="email"
          placeholder="Email Address"
          register={{ ...register("email") }}
          errorMessage={errors.email?.message}
        />

        <Input
          type="password"
          id="password"
          placeholder="Password"
          register={{ ...register("password") }}
          errorMessage={errors.password?.message}
        />

        <Button type="submit">Login</Button>
        <br></br>
        <br></br>
        <div style={{ textAlign: "right" }}>
          <NavLink
            style={{ color: "#E70B89", textDecoration: "none" }}
            to="/login"
          >
            Forgot Password?
          </NavLink>
        </div>
      </form>
    </div>
  );
};
export default Login;
