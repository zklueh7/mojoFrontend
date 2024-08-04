import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";
import CatchAppApi from "../api/api";
import "./Area.css";

/** Show area home page
 *
 * Area description and links to area message board and weather pages
 *
 * Linked to from AreaCard
 */

function AreaHome() {
  const { area } = useParams();

  const [areaInfo, setAreaInfo] = useState(null);

  useEffect(function getAreaInfoOnMount() {
    search(area);
  }, []);

  /** Loads area info and messages. */
  async function search(myArea) {
    let areaInfo = await CatchAppApi.getArea(area);
    setAreaInfo(areaInfo);
  }
  if (!areaInfo) return <LoadingSpinner />;

  return (
      <div className="area-home">
        <div className="card mt-2 ml-2 mr-4">
        <div className="card-body ml-1 pt-2">
          <h6 className="card-title">{areaInfo.title}</h6>
          <p>{areaInfo.description}</p>
          <img className="area-image" src={areaInfo.pictureUrl}></img>
          <Link className="btn btn-primary btn-block mt-2" to={{pathname: `/areas/${areaInfo.name}/weather`}}>Weather</Link>
          <Link className="btn btn-primary btn-block mt-2" to={{pathname: `/areas/${areaInfo.name}/messages`}}>Message Board</Link>
        </div>
        </div>
      </div>
  );
}


export default AreaHome;
