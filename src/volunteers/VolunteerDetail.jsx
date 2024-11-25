import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";
import MojoApi from "../api/api";

/** User profile page
 *
 * Shows user profile details and 
 * link to profile editing form
 * 
 */

function VolunteerDetail() {

  const { volunteer } = useParams();
  console.log(volunteer);
  const navigate = useNavigate();

  const [volunteerInfo, setVolunteerInfo] = useState(null);

  async function handleDelete(volunteerId) {
    await MojoApi.deleteVolunteer(volunteerId);


    // trigger reloading of user information throughout the site
    navigate("/volunteers");
  }

  useEffect(function getVolunteerInfoOnMount() {
    search(volunteer);
  }, []);

  /** Triggered by search form submit; reloads jobs. */
  async function search(volunteer) {
    console.log(volunteer);
    let volunteerInfo = await MojoApi.getVolunteer(volunteer);
    // console.log(dogInfo);
    setVolunteerInfo(volunteerInfo);
  }
  if (!volunteerInfo) return <LoadingSpinner />;

  return (
    <div className="outer-volunteer-dtl">
      <div className="volunteer-dtl">
        <h3 className="subheading">{volunteerInfo.name}</h3>

        <p><u>General Questions</u></p>
        <p>Address: {volunteerInfo.address}</p>
        <p>Phone number: {volunteerInfo.phone}</p>
        <p>Email: {volunteerInfo.email}</p>

        <p><u>Foster Volunteer Survey</u></p>
        <p>Does the volunteer have a fence? If so, what type and approximately how tall? {volunteerInfo.fence}</p>
        <p>Does the volunteer have any other dogs? If so, what are their ages? {volunteerInfo.dogs}</p>
        <p>Does the volunteer have any cats? {volunteerInfo.cats}</p>
        <p>Does the volunteer have any other animals? {volunteerInfo.animals}</p>
        <p>Does the volunteer have children or grandchildren who they live with or who visit often? If so, what are their ages? {volunteerInfo.children}</p>
        <p>Is the volunteer willing to provide overnights for dogs on transports, or short-term fostering until the dog can go to his/her permanent foster? {volunteerInfo.overnight}</p>
        <p>Volunteer's restrictions for foster dogs: {volunteerInfo.restrictions}</p>
        <p>Is the volunteer willing to drive to meet the dog on transport to you, or pick up at a local airport if coming by Pilots n Paws? {volunteerInfo.pickup}</p>

        <p><u>Transport Volunteer Survey</u></p>
        <p>Vehicle description: {volunteerInfo.vehicle}</p>
        <p>Does the volunter have crates for their car? (Include size) {volunteerInfo.crates}</p>
        <p>What approximate distance is the volunteer willing/able to travel? {volunteerInfo.distance}</p>

        <p><u>General Volunteer Survey</u></p>
        <p>Is the volunteer willing to evaluate dogs in shelters, or owner relinquishments? {volunteerInfo.evaluate}</p>
        <p>Is the volunteer willing to do home visits for potential adopters or new fosters?{volunteerInfo.home_visits}</p>
        <p>Would the volunteer like to participate in MoKan BCR activities/events?{volunteerInfo.events}</p>
        <button className="btn btn-danger btn-block mt-2" onClick={() => handleDelete(volunteerInfo.volunteer_id)}>
          Delete Volunteer Profile
        </button>
      </div>
    </div>
  );
}

export default VolunteerDetail;