import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import SignupForm from "../auth/SignupForm";
import LoginForm from "../auth/LoginForm";
import Profile from "../profiles/Profile";
import EditProfileForm from "../profiles/EditProfileForm";
import DeleteProfileForm from "../profiles/DeleteProfileForm";
import Search from "../search/Search";
import AreaHome from "../areas/AreaHome";
import AreaMessages from "../messages/AreaMessages";
import AreaWeather from "../areas/AreaWeather";
import VolunteerList from "../volunteers/VolunteerList";
import DogList from "../dogs/DogList";
import OwnerRelinqSurvey from "../surveys/owner_relinq_survey";
import ShelterRelinqSurvey from "../surveys/shelter_relinq_survey";
import TestSurvey from "../surveys/test_survey";
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

              <Route exact path="/search" element={<Search />} />

              <Route exact path="/areas/:area" element={<AreaHome />} />

              <Route exact path="/areas/:area/messages" element={<AreaMessages />} />

              <Route exact path="/areas/:area/weather" element={<AreaWeather />} />

              <Route exact path="/volunteers" element={<VolunteerList />} />

              <Route exact path="/dogs" element={<DogList />} />

              <Route exact path="/surveys/owner-relinquish-survey" element={<OwnerRelinqSurvey />} />

              <Route exact path="/surveys/shelter-relinquish-survey" element={<ShelterRelinqSurvey />} />

              <Route exact path="/surveys/test-survey" element={<TestSurvey />} />

              <Route exact path="/surveys" element={<SurveyHome />} />
  
            </Routes>
        </div>
    );
  }
  
  export default MojoRoutes;