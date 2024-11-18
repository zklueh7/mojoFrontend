import React from "react";
import { Link } from "react-router-dom";
import "./Surveys.css"

/** Survey homepage
 *
 * Lists surveys
 * 
 */

function SurveyHome() {

    return (
        <div>
            <h1 className="heading">Surveys</h1>
            <div className="container">
                <Link className="card-body surveys"
                    to="/surveys/volunteer-survey">
                    Volunteer Survey
                </Link>
                <Link className="card-body surveys"
                    to="/surveys/owner-relinquish-survey">
                    Owner Relinquish Request
                </Link>
                <Link className="card-body surveys"
                    to="/surveys/shelter-relinquish-survey">
                    Shelter Relinquish Request
                </Link>
            </div>
        </div>


    );
}

export default SurveyHome;
