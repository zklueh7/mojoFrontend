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
        ? <p>You're logged in</p>
        : <HomepageAnon login={login} />
      }
    </div>
  );
}

export default Homepage;
