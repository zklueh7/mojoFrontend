import React, { useState, useEffect } from "react";
import MojoApi from "../api/api";
import { Link, useLocation } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";

/** Show page with list of all dogs.
 *
 * On mount, loads users from API.
 * Re-loads filtered users on submit from search form.
 *
 *
 * This is routed to at /volunteers
 */

function DogList() {
  const [dogs, setDogs] = useState(null);

  useEffect(function getAllDogsOnMount() {
    search();
  }, []);

  /** Triggered by search form submit; reloads jobs. */
  async function search() {
    let dogs = await MojoApi.getDogs();
    console.log(dogs);
    setDogs(dogs);
  }
  if (!dogs) return <LoadingSpinner />;

  return (
    <div className="search-results">
      {dogs.length
        ? dogs.map(dog => (<Link className="btn" to={`/dogs/${dog.dog_name}`} state={{ state: 'mystate' }} >
          {dog.dog_name}
        </Link>))
        : <p>Sorry, no dogs were found!</p>
      }
    </div>
  );
}

export default DogList;
