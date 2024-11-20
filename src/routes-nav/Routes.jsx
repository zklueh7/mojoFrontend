import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import SignupForm from "../auth/SignupForm";
import LoginForm from "../auth/LoginForm";
import Profile from "../profiles/Profile";
import EditProfileForm from "../profiles/EditProfileForm";
import DeleteProfileForm from "../profiles/DeleteProfileForm";
import DogDetails from "../dogs/DogDetails";
import VolunteerList from "../volunteers/VolunteerList";
import DogList from "../dogs/DogList";
import OwnerRelinqSurvey from "../surveys/owner_relinq_survey";
import ShelterRelinqSurvey from "../surveys/shelter_relinq_survey";
import VolunteerSurvey from "../surveys/volunteer_survey";
import SurveyHome from "../surveys/SurveyHome";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function MojoRoutes({ login, signup }) {
  
    return (
        <div>
            <Routes>
              <Route exact path="/" element={<Homepage login={login}/>} />

              <Route exact path="/login" element={<LoginForm login={login} />} />

              <Route exact path="/signup" element={<SignupForm signup={signup} />} />

              <Route exact path="/profile" element={<Profile />} />

              <Route exact path="/edit-profile-form" element={<EditProfileForm />} />

              <Route exact path="/delete-profile-form" element={<DeleteProfileForm />} />

              <Route exact path="/dogs/:dog" element={<DogDetails />} />

              <Route exact path="/volunteers" element={<VolunteerList />} />

              <Route exact path="/dogs" element={<DogList />} />

              <Route exact path="/surveys/owner-relinquish-survey" element={<OwnerRelinqSurvey />} />

              <Route exact path="/surveys/shelter-relinquish-survey" element={<ShelterRelinqSurvey />} />

              <Route exact path="/surveys/volunteer-survey" element={<VolunteerSurvey />} />

              <Route exact path="/surveys" element={<SurveyHome />} />
  
            </Routes>
        </div>
    );
  }
  
  export default MojoRoutes;