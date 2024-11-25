import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import CatchAppApi from "../api/api";
import "./Profile.css";

/** User profile page
 *
 * Shows user profile details and 
 * link to profile editing form
 * 
 */

function Profile() {
  const { currentUser } = useContext(UserContext);
  const miscClimber = "/public/misc_climber.png";

  async function handleDelete(evt) {
    evt.preventDefault();

    try {
      await CatchAppApi.deleteProfile(currentUser.username);
    } catch (errors) {
      debugger;
      return;
    }
  }

  return (
    <div className="outer-profile">
      <div className="profile">
      <h3 className="heading">My Profile</h3>
        <p>Username: {currentUser.username}</p>
        <p>First Name: {currentUser.firstName}</p>
        <p>Last Name: {currentUser.lastName}</p>
        <p>Email: {currentUser.email}</p>
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

export default Profile;
