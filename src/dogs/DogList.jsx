import React, { useState, useEffect } from "react";
import MojoApi from "../api/api";
import { Link } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";

/** Show page with list of all dogs.
 *
 * On mount, loads dogs from API.
 *
 * This is routed to at /dogs
 */

function DogList() {
  const [dogs, setDogs] = useState(null);

  // get all dogs on mount
  useEffect(function getAllDogsOnMount() {
    search();
  }, []);

  // get all dogs from API
  async function search() {
    let dogs = await MojoApi.getDogs();
    setDogs(dogs);
  }
  if (!dogs) return <LoadingSpinner />;

  return (
    <div>
      <h1 className="heading">Dogs</h1>
      <div className="container">
        {dogs.length
          ? dogs.map(dog => (<Link className="btn" to={`/dogs/${dog.dog_name}`} >
            {dog.dog_name}
          </Link>))
          : <p className="not-found-msg">Sorry, no dogs were found!</p>
        }
      </div>
    </div>

  );
}

export default DogList;
