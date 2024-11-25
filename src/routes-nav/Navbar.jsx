import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navigation.css";
import logo from "../imgs/mokan_bc.jpg";

/** Navigation bar for site. Shows up on every page if a user is logged in.
 *
 * Rendered by App.
 */

function Navbar({ logout }) {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <div className="logo-div">
        <img className="logo" src={logo}></img>
      </div>
      <nav className="navbar navbar-expand-sm">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <ul className="navbar-nav ml-auto align-items-center">
          <li className="nav-item">
            <NavLink className="nav-link" to="/map">
              Map
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/surveys">
              Surveys
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/volunteers">
              Volunteers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dogs">
              Dogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              My Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={logout}>
              Log Out {currentUser.first_name || currentUser.username}
            </Link>
          </li>
        </ul>
      </nav>
    </div>

  );
}

export default Navbar;
