import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import MojoApi from "../api/api";
import "./Volunteer.css";

/** User profile page
 *
 * Shows user profile details and 
 * link to profile editing form
 * 
 */

function VolunteerDetail(volunteer) {
    console.log(volunteer);

  async function handleDelete(evt) {
    evt.preventDefault();

    try {
      await MojoApi.deleteProfile(currentUser.username);
    } catch (errors) {
      debugger;
      return;
    }
  }

  return (
    <div className="container">
      <div className="card-body vol-profile">
        <p>Username: {volunteer.volunteer.username}</p>
        <p>First Name: {volunteer.volunteer.firstName}</p>
        <p>Last Name: {volunteer.volunteer.lastName}</p>
        <p>Email: {volunteer.volunteer.email}</p>
        <p>
          <Link className="btn" to="/edit-profile-form">
            Edit Profile
          </Link>
          <Link className="btn" to="/delete-profile-form">
            Delete Profile
          </Link>
        </p>
      </div>
    </div>
  );
}

export default VolunteerDetail;
