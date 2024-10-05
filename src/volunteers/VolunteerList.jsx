import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search/SearchBar";
import MojoApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import "../search/Search.css";
import VolunteerDetail from "./VolunteerDetail";

/** Show page with list of all users.
 *
 * On mount, loads users from API.
 * Re-loads filtered users on submit from search form.
 *
 *
 * This is routed to at /volunteers
 */

function VolunteerList() {
  const [volunteers, setVolunteers] = useState(null);

  useEffect(function getAllVolunteersOnMount() {
    search();
  }, []);

  /** Triggered by search form submit; reloads jobs. */
  async function search() {
    let volunteers = await MojoApi.getUsers();
    console.log(volunteers);
    setVolunteers(volunteers);
  }
  if (!volunteers) return <LoadingSpinner />;

  return (
    <div className="area-list col-md-6 offset-md-3 pt-4">
      {/* <SearchBar searchFor={search} /> */}
      <div className="search-results">
        {volunteers.length
          ? volunteers.map(volunteer => (<VolunteerDetail volunteer={volunteer}/>))
          : <p>Sorry, no volunteers were found!</p>
        }
      </div>
    </div>
  );
} 

export default VolunteerList;
