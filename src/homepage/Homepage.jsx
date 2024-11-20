import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import HomepageAnon from "./HomepageAnon";
import logo from "../imgs/favicon.jpg";
import "./Homepage.css";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage({ login }) {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="container text center">
      {currentUser
        ? <div><h3> Welcome to Mojo {currentUser.username}!</h3>
          <img className="mokan-logo" src={logo}></img></div>
        : <HomepageAnon login={login} />
      }
    </div>
  );
}

export default Homepage;
