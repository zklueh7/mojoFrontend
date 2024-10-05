import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import HomepageAnon from "./HomepageAnon";

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
    <div className="container text-center">
      {currentUser
        ? <h3 className="heading">Welcome to MoJo {currentUser.firstName}!</h3>
        : <HomepageAnon login={login} />
      }
    </div>
  );
}

export default Homepage;
