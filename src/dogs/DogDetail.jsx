import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MojoApi from "../api/api";

/** Dog profile page
 *
 * Shows dog profile details and 
 * link to dog editing form
 * 
 */

function DogDetail(dog) {
    console.log("dog", dog);

//   async function handleDelete(evt) {
//     evt.preventDefault();

//     try {
//       await MojoApi.deleteProfile(currentUser.username);
//     } catch (errors) {
//       debugger;
//       return;
//     }
//   }

  return (
    <div className="container">
      <div className="card-body vol-profile">
        <p>Name: {dog.dog.name}</p>
        <p>Food type: {dog.dog.foodType}</p>
        <p>Toppings: {dog.dog.toppings}</p>
        {/* <p>
          <Link className="btn" to="/edit-profile-form">
            Edit Profile
          </Link>
          <Link className="btn" to="/delete-profile-form">
            Delete Profile
          </Link>
        </p> */}
      </div>
    </div>
  );
}

export default DogDetail;
