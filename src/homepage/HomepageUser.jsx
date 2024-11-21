import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import "./Homepage.css";
import logo from "../imgs/logo.jpg";

/** Homepage of site for logged in user.
 *
 * Shows welcome message.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function HomepageUser({ login }) {

    return (
        <div className="outer-homepage">
            <div className="homepage">
                <h1 className="heading">Welcome Mo-Kan Volunteers!</h1>
                <p>This website is designed to be a tool to assist with internal volunteer logistics + coordinating and is a work in progress.</p>
                <p>Any and all feedback is welcome, please email suggestions and questions to Zoey Klueh at zklueh@gmail.com </p>
            </div>
        </div>

    );
}

export default HomepageUser;
