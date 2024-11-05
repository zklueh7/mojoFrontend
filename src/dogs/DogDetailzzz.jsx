import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";
import "../search/Search.css"
import MojoApi from "../api/api";

/** Dog profile page
 *
 * Shows dog profile details and 
 * link to dog editing form
 * 
 */

function DogDetail() {
    const { dog } = useParams();

    const [dogInfo, setDogInfo] = useState(null);

    async function handleDelete(evt, dogInfo) {
        evt.preventDefault();
    
        let username = currentUser.username;
    
        try {
          await CatchAppApi.deleteProfile(username);
        } catch (errors) {
          debugger;
          setFormErrors(errors);
          return;
        }
    
        setFormData(f => ({ ...f, password: "" }));
        setFormErrors([]);
        setSaveConfirmed(true);
    
        // trigger reloading of user information throughout the site
        setCurrentUser(null);
        navigate("/");
      }

    function translate(dogInfo) {
        // dog sex
        if (dogInfo.dog_sex === "Item 1") {
            dogInfo.sex = "Male";
        }
        if (dogInfo.dog_sex === "Item 2") {
            dogInfo.dog_sex = "Female";
        }

        // dog color
        if (dogInfo.dog_color === "Item 1") {
            dogInfo.dog_color = "Black/White (with or without tri)";
        }
        if (dogInfo.dog_color === "Item 2") {
            dogInfo.dog_color = "Blue Merle, Red Merle";
        }
        if (dogInfo.dog_color === "Item 3") {
            dogInfo.dog_color = "Red/White (with or without tri)";
        }
        if (dogInfo.dog_color === "Item 4") {
            dogInfo.dog_color = "Other";
        }

        // dog breed
        if (dogInfo.dog_breed === "Item 1") {
            dogInfo.dog_breed = "Mixed";
        }
        if (dogInfo.dog_breed === "Item 2") {
            dogInfo.dog_breed = "Purebred";
        }

        // dog veterinary history
        let vetHistStr = dogInfo.dog_vet_hist.slice(2, dogInfo.dog_vet_hist.length - 2);
        let vetHistArr = vetHistStr.split('","');
        dogInfo.dog_vet_hist = vetHistArr.join(", ");

        // dog negative reactions
        let dogNegStr = dogInfo.dog_negative.slice(2, dogInfo.dog_negative.length - 2);
        let dogNegArr = dogNegStr.split('","');
        dogInfo.dog_negative = dogNegArr.join(", ");

        // dog fearful reactions
        let dogFearStr = dogInfo.dog_fearful.slice(2, dogInfo.dog_fearful.length - 2);
        let dogFearArr = dogFearStr.split('","');
        dogInfo.dog_fearful = dogFearArr.join(", ");

        // dog tricks
        let dogTricksStr = dogInfo.dog_tricks.slice(2, dogInfo.dog_tricks.length - 2);
        let dogTricksArr = dogTricksStr.split('","');
        dogInfo.dog_tricks = dogTricksArr.join(", ");

        // dog description
        let dogAdjsStr = dogInfo.dog_adjectives.slice(2, dogInfo.dog_adjectives.length - 2);
        let dogAdjsArr = dogAdjsStr.split('","');
        dogInfo.dog_adjectives = dogAdjsArr.join(", ");

        // dog indoors or outdoors
        if (dogInfo.dog_location === "Item 1") {
            dogInfo.dog_location = "Inside the home";
        }
        if (dogInfo.dog_location === "Item 2") {
            dogInfo.dog_location = "Outside the home";
        }

        // where dog stays when alone
        let dogAloneStr = dogInfo.dog_alone.slice(2, dogInfo.dog_alone.length - 2);
        let dogAloneArr = dogAloneStr.split('","');
        dogInfo.dog_alone = dogAloneArr.join(", ");

        // dog's crate behavior
        let dogCrateStr = dogInfo.dog_crate_behavior.slice(2, dogInfo.dog_crate_behavior.length - 2);
        let dogCrateArr = dogCrateStr.split('","');
        dogInfo.dog_crate_behavior = dogCrateArr.join(", ");

        // animals dog lives with
        let dogAnimalsStr = dogInfo.dog_animals.slice(2, dogInfo.dog_animals.length - 2);
        let dogAnimalsArr = dogAnimalsStr.split('","');
        dogInfo.dog_animals = dogAnimalsArr.join(", ");

        return dogInfo;

    }

    useEffect(function getDogInfoOnMount() {
        search(dog);
    }, []);

    /** Triggered by search form submit; reloads jobs. */
    async function search(dog) {
        let dogInfo = await MojoApi.getDog(dog);
        dogInfo = translate(dogInfo);
        setDogInfo(dogInfo);
    }
    if (!dogInfo) return <LoadingSpinner />;

    return (
        <div>
            <div className="card-body">
                <img src={dogInfo.photos}></img>
                <h1>{dogInfo.dog_name}</h1>
                <h2>Owner Info:</h2>
                <p>Name: {dogInfo.owner_first_name} {dogInfo.owner_last_name}</p>
                <p>Address: {dogInfo.owner_st_address} {dogInfo.owner_city}, {dogInfo.owner_state} {dogInfo.owner_zip}</p>
                <p>Home phone: {dogInfo.owner_home_phone}</p>
                <p>Cell phone: {dogInfo.owner_cell_phone}</p>
                <p>Email: {dogInfo.owner_email}</p>
                <h2>Dog Info:</h2>
                <p>Sex: {dogInfo.dog_sex}</p>
                <p>Age/height/weight: {dogInfo.dog_age}</p>
                <p>Color: {dogInfo.dog_color}</p>
                <p>Purebred/mixed: {dogInfo.dog_breed}</p>
                <p>Relinquishment reason: {dogInfo.relinquish_reason}</p>
                <p>Distance owner is willing to drive: {dogInfo.how_far_owner}</p>
                <p>Dog ownership history: {dogInfo.dog_purchase}</p>
                <p>Dog bite history: {dogInfo.dog_bite} </p>
                <p>Dog nip history: {dogInfo.dog_nip}</p>
                <p>Known health concerns: {dogInfo.dog_health}</p>
                <p>Dog veterinary history: {dogInfo.dog_vet_hist}</p>
                <p>Heartworm/ticknorne disease status: {dogInfo.dog_heartform}</p>
                <p>Dog's response to kids: {dogInfo.dog_kids}</p>
                <p>Dog reacts negatively to: {dogInfo.dog_negative}</p>
                <p>Dog reacts fearfully to: {dogInfo.dog_fearful}</p>
                <p>Details for above reactions: {dogInfo.dog_negative_deets}</p>
                <p>Dog's response to  loud noises: {dogInfo.dog_noises}</p>
                <p>Dog's response to movement: {dogInfo.dog_movement}</p>
                <p>Cue's dog knows: {dogInfo.dog_tricks}</p>
                <p>Description of dog: {dogInfo.dog_adjectives} </p>
                <p>Details if owner marked the dog as aggressive, defensive, protective, fearful or dominant: {dogInfo.dog_agro_examples}</p>
                <p>Behaviors that need improvement: {dogInfo.dog_improvement}</p>
                <p>Where the dog predominantly lives: {dogInfo.dog_location}</p>
                <p>Where the dog stays when home alone: {dogInfo.dog_alone}</p>
                <p>How long the dog is typically crated: {dogInfo.dog_crate_time}</p>
                <p>Dog's behavior when crated: {dogInfo.dog_crate_behavior}</p>
                <p>Dog's crate behavior details: {dogInfo.dog_crate_behavior_deets}</p>
                <p>Other animals the dog lives with: {dogInfo.dog_animals}</p>
                <button className="btn btn-danger btn-block mt-2" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default DogDetail;
