import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import "./Homepage.css";
import logo from "../imgs/logo.jpg";

/** Homepage of site for anonyous user.
 *
 * Shows login/sign-up buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function HomepageAnon({ login }) {

    return (
        <div className="container">
            <div className="card-body">
                <h1 className="heading">Welcome Mo-Kan Volunteers!</h1>
                <img className="mokan-logo" src={logo}></img>
                <LoginForm login={login} />
                <h2 className="or"><span className="text-center">OR</span></h2>
                <Link className="btn"
                    to="/signup">
                    Sign up
                </Link>
            </div>
        </div>
    );
}

export default HomepageAnon;
