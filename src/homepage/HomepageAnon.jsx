import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import "./Homepage.css";
import logo from "../imgs/logo.jpg";

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
        <div className="card-body">
            <h1 className="heading">Welcome Mo-Kan volunteers!</h1><img className="mokan-logo" src={logo}></img>
            {/* <h6 className="subheading">Welcome Mo-Kan volunteers! </h6> */}
            <LoginForm login={login} />
            <h2 className="or"><span className="text-center">OR</span></h2>
            <Link className="btn"
                to="/signup">
                Sign up
            </Link>
        </div>
    );
}

export default HomepageAnon;
