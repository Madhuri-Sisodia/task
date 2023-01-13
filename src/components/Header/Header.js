import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/registration">
              SignUp
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
