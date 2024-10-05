import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navigation.css";

/** Navigation bar for site. Shows up on every page if a user is logged in.
 *
 * Rendered by App.
 */

function Navbar({ logout }) {
  const { currentUser } = useContext(UserContext);

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <Link className="navbar-brand ml-1 linky" to="/">
        MoJo
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link linky" to="/map">
            Map
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link linky" to="/surveys">
            Surveys
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link linky" to="/volunteers">
            Volunteers
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link linky" to="/dogs">
            Dogs
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <Link className="nav-link linky" to="/" onClick={logout}>
            Log Out {currentUser.first_name || currentUser.username}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
