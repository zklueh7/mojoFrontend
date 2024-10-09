import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "../json/test_json";
import MojoApi from "../api/api";

async function addTest(testData) {
    let testSuccess = await MojoApi.addTest(testData);
}

function TestSurvey() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        addTest(sender.data);
    });
    return (<Survey model={survey} />);
}

export default TestSurvey;