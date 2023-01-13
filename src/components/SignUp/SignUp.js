import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../UI/Input/Input";
import classes from "./SignUp.module.css";
import Button from "../UI/Button/Button";

const schema = yup.object({
  firstName: yup.string().required("First Name must not be empty"),
  lastName: yup.string().required("Last Name must not be empty"),
  email: yup
    .string()
    .required("Email Name must not be empty")
    .email("Email must be valid"),
  password: yup
    .string()
    .required("Password Number must not be empty")
    .min(8, "Please enter 8 characters valid password."),
});

const SignUp = (props) => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signUpAuth = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    console.log(data);
    reset();
    navigate("/login");
  };

  return (
    <div className={classes.Signup}>
      <form onSubmit={handleSubmit(signUpAuth)}>
        <Input
          type="text"
          id="firstName"
          placeholder="First Name"
          register={{ ...register("firstName") }}
          errorMessage={errors.firstName?.message}
        />

        <Input
          type="text"
          id="lastName"
          placeholder="Last Name"
          register={{ ...register("lastName") }}
          errorMessage={errors.lastName?.message}
        />

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
          placeholder="password"
          register={{ ...register("password") }}
          errorMessage={errors.password?.message}
        />

        <Button type="submit">SignUp</Button>
      </form>
    </div>
  );
};
export default SignUp;
