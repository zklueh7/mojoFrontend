import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "../json/owner_relinq_json";
import MojoApi from "../api/api";

async function addDog(dogData) {
    let testSuccess = await MojoApi.postDog(dogData);
}

function OwnerRelinqSurvey() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        addDog(sender.data);
        console.log(JSON.stringify(sender.data, null, 3));
    });
    return (<Survey model={survey} />);
}

export default OwnerRelinqSurvey;