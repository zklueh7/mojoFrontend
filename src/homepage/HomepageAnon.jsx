import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import "./Homepage.css";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function HomepageAnon({ login }) {

    return (
        <div>
            <h1 className="heading">MoJo</h1>
            <h6 className="subheading">Welcome MoKan volunteers! </h6>
            <div className="card-body">
                    <LoginForm login={login} />
                    <h2 className="or"><span>OR</span></h2>
                    <Link className="btn"
                        to="/signup">
                        Sign up
                    </Link>
            </div>
        </div>

    );
}

export default HomepageAnon;
