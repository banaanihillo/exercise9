import React, {useEffect} from "react";
import {RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {apiBaseUrl} from "../constants";
import {Patient, PatientProps} from "../types";
import {useStateValue} from "../state";

const IndividualPatient:React.FunctionComponent<
    RouteComponentProps<PatientProps>
> = (props) => {
    const {match} = props;
    const [state, dispatch] = useStateValue();
    const expandedPatientInformation = state.patients[match.params.id]

    useEffect(() => {
        try {
            if (state.patients[match.params.id].ssn) {
                return
            }
            axios
                .get<Patient>(`${apiBaseUrl}/patients/${match.params.id}`)
                .then(result => {
                    const individualPatient = result.data;
                    dispatch({type: "EXPAND_PATIENT", payload: individualPatient});
                })
        } catch (error) {
            console.log("Something went wrong somewhere or everywhere")
        }
    }, [dispatch, match.params.id, state.patients])
    
    return (
        <div>
            <h2> {expandedPatientInformation.name} </h2>
            <p> Born on: {expandedPatientInformation.dateOfBirth} </p>
            <p> Assigned gender: {expandedPatientInformation.gender} </p>
            <p> Occupation: {expandedPatientInformation.occupation} </p>
            <p> Social security number: {expandedPatientInformation.ssn} </p>
        </div>
    )
}

export default IndividualPatient;
