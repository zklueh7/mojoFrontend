import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "../json/volunteer_json";
import MojoApi from "../api/api";

async function addVolunteer(volunteerData) {
    let testSuccess = await MojoApi.postVolunteer(volunteerData);
    console.log(testSuccess);
}

function VolunteerSurvey() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        addVolunteer(sender.data);
        console.log(JSON.stringify(sender.data, null, 3));
    });
    return (<Survey model={survey} />);
}

export default VolunteerSurvey;