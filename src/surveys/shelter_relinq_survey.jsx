import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "../json/shelter_relinq_json";
import MojoApi from "../api/api";

async function addDog(dogData) {
    dogData.shelter_or_owner = "Shelter surrender";
    dogData.owner_first_name = null;
    dogData.owner_last_name = null;
    dogData.owner_st_address = null;
    dogData.owner_city = null;
    dogData.owner_state = null;
    dogData.owner_zip = null;
    dogData.owner_email = null;
    dogData.owner_home_phone = null;
    dogData.owner_cell_phone = null;
    let testSuccess = await MojoApi.postDog(dogData);
}

function ShelterRelinqSurvey() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        addDog(sender.data);
        console.log(JSON.stringify(sender.data, null, 3));
    });
    return (<Survey model={survey} />);
}

export default ShelterRelinqSurvey;