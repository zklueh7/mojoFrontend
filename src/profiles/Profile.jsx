import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Profile.css";

/** User profile page
 *
 * Shows user profile details and 
 * link to profile editing and deleting forms
 * 
 */

function Profile() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="outer-profile">
      <div className="card profile">
      <h2 className="heading">My Profile</h2>
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
