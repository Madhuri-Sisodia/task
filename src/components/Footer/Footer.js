import React from "react";
import classes from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
    <footer>
      <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
        or login with
      </NavLink>
      <br></br>
      <br></br>

      <FcGoogle className={classes.google} />
      <CiFacebook className={classes.facebook} />
      <AiFillTwitterCircle className={classes.twitter} />

      <br></br>

      <p style={{ display: "inline" }}>Don't have an account? </p>
      <NavLink
        style={{ textDecoration: "none", color: "#E70B89" }}
        to="/registration"
      >
        Create new now!
      </NavLink>
      <br></br>
      <br></br>
      <p style={{ display: "inline" }}>By signing up,you are agree with our </p>
      <NavLink style={{ color: "#E70B89" }} to="/">
        Terms & Conditions
      </NavLink>
    </footer>
  );
};
export default Footer;
