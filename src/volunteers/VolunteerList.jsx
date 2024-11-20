import React, { useState, useEffect } from "react";
import MojoApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import VolunteerDetail from "./VolunteerDetail";

/** Show page with list of all volunteers.
 *
 * On mount, loads volunteers from API.
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
    let volunteers = await MojoApi.getVolunteers();
    setVolunteers(volunteers);
  }
  if (!volunteers) return <LoadingSpinner />;

  return (
    <div>
      <h1 className="heading">Volunteers</h1>
        <div className="container">
          {volunteers.length
            ? volunteers.map(volunteer => (<VolunteerDetail volunteer={volunteer} />))
            : <p>Sorry, no volunteers were found!</p>
          }
        </div>
      </div>
  );
}

export default VolunteerList;
