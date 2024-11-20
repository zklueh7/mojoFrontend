import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import MojoApi from "../api/api";

/** User profile page
 *
 * Shows user profile details and 
 * link to profile editing form
 * 
 */

function VolunteerDetail(volunteer) {

  return (
      <div className="card-body volunteer-dtl">
        <h3 className="subheading">{volunteer.volunteer.volunteer_id}</h3>
        <p>Username: {volunteer.volunteer.name}</p>
        <p>
          <Link className="btn" to="/edit-profile-form">
            Edit Profile
          </Link>
          <Link className="btn" to="/delete-profile-form">
            Delete Profile
          </Link>
        </p>
      </div>
  );
}

export default VolunteerDetail;
