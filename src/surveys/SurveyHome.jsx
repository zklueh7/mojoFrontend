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
            <div className="indent">
                <h1 className="heading">Surveys</h1>
                <Link className="btn my-btn"
                    to="/surveys/owner-relinquish-survey">
                    Owner Relinquish Request
                </Link>
                <Link className="btn my-btn"
                    to="/surveys/shelter-relinquish-survey">
                    Shelter Relinquish Request
                </Link>
            </div>

        </div>

    );
}

export default SurveyHome;
