import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import MojoApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import "./Search.css";

/** Show page with list of areas.
 *
 * On mount, loads jobs from API.
 * Re-loads filtered jobs on submit from search form.
 *
 * AreaList -> AreaCardList -> AreaCard
 *
 * This is routed to at /areas
 */

function Search() {
  const [areas, setAreas] = useState(null);

  useEffect(function getAllAreasOnMount() {
    search();
  }, []);

  /** Triggered by search form submit; reloads jobs. */
  async function search(handle) {
    let results = await MojoApi.getUsers(handle);
    console.log(areas);
    setAreas(areas);
  }
  if (!areas) return <LoadingSpinner />;

  return (
    <div className="area-list col-md-6 offset-md-3 pt-4">
      <SearchBar searchFor={search} />
      <div className="search-results">
        {results.length
          ? results.map(result => (<Link className="result-link" to={{ pathname: `/${volOrDog}/${result.id}` }}>{result.first_name}</Link>))
          : <p>Sorry, no results were found!</p>
        }
      </div>
    </div>
  );
} 

export default Search;
