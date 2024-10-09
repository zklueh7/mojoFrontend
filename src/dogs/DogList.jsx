import React, { useState, useEffect } from "react";
import MojoApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import DogDetail from "./DogDetail";

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
    let dogs = await MojoApi.getTests();
    console.log(dogs);
    setDogs(dogs);
  }
  if (!dogs) return <LoadingSpinner />;

  return (
    <div className="area-list col-md-6 offset-md-3 pt-4">
      <div className="search-results">
        {dogs.length
          ? dogs.map(dog => (<DogDetail dog={dog}/>))
          : <p>Sorry, no dogs were found!</p>
        }
      </div>
    </div>
  );
} 

export default DogList;
