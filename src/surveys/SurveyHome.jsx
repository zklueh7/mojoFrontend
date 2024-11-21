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
        <div className="outer-surveys">
            <div className="top-surveys">
                <h1 className="heading">Surveys</h1>
            </div>
            <div className="bottom-surveys">
                <Link className="survey"
                    to="/surveys/volunteer-survey">
                    Volunteer Survey
                </Link>
                <Link className="survey"
                    to="/surveys/owner-relinquish-survey">
                    Owner Relinquish Request
                </Link>
                <Link className="survey"
                    to="/surveys/shelter-relinquish-survey">
                    Shelter Relinquish Request
                </Link>
            </div>

        </div>
    );
}

export default SurveyHome;
