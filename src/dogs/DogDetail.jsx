import React, { useContext } from "react";
import "../search/Search.css"
import { Link, useLocation } from "react-router-dom";
import MojoApi from "../api/api";

/** Dog profile page
 *
 * Shows dog profile details and 
 * link to dog editing form
 * 
 */

function DogDetail(dog) {
  console.log("dog", dog);
  let data = {name: 'June', age: 4};

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
    <div >
      <div className="card-body vol-profile">
        <p>
          <Link className="btn" to={`/dogs/${dog.dog.dog_name}`} state={{state: 'mystate'}} >
          {dog.dog.dog_name}
        </Link>
      </p>
    </div>
    </div >
  );
}

export default DogDetail;
