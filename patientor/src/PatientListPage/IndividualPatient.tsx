import React, {useEffect, useState} from "react";
import {RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {apiBaseUrl} from "../constants";
import {Patient, PatientProps, HealthCheckThing} from "../types";
import {useStateValue} from "../state";
import {expandPatient, addEntry} from "../state/reducer";
import EntryDetails from "./EntryDetails";
import AddThingModal from "./AddThingModal";

const IndividualPatient:React.FunctionComponent<
    RouteComponentProps<PatientProps>
> = (props) => {
    const {match} = props;
    const [state, dispatch] = useStateValue();
    const [modal, toggleModal] = useState<boolean>(false)
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
                    dispatch(expandPatient(individualPatient));
                })
        } catch (error) {
            console.log("Something went wrong somewhere or everywhere")
        }
    }, [dispatch, match.params.id, state.patients])

    const getDiagnosis = (diagnosisCode: string) => {
        const extendedDiagnosisInformation = Object.values(state.diagnoses).find(info =>
            info.code === diagnosisCode
        )
        if (!extendedDiagnosisInformation) {
            throw new Error("Could not find anything with that diagnosis code")
        } else {
            return <span>
                <span> {extendedDiagnosisInformation.code}: </span>
                <span> {extendedDiagnosisInformation.name} </span>
                {extendedDiagnosisInformation.latin
                    ? <span> ({extendedDiagnosisInformation.latin}) </span>
                    : null
                }
            </span>
        }
    }

    if (!expandedPatientInformation) {
        return (
            <div>
                Nothing to see here yet.
            </div>
        )
    }

    const onCancel = () => {
        toggleModal(false)
    }

    const submitNewEntry = async (values: HealthCheckThing) => {
        try {
            const updatedPatient = await axios.post<Patient>(
                `${apiBaseUrl}/patients/${match.params.id}/entries`,
                values
            )
            dispatch(addEntry(updatedPatient.data))
            toggleModal(false)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            <h2> {expandedPatientInformation.name} </h2>
            <p> Born on: {expandedPatientInformation.dateOfBirth} </p>
            <p> Assigned gender: {expandedPatientInformation.gender} </p>
            <p> Occupation: {expandedPatientInformation.occupation} </p>
            <p> Social security number: {expandedPatientInformation.ssn} </p>

            <h3> Entries </h3>
            { (!expandedPatientInformation.entries)
                ? <p> Expanded patient information is unavailable for some reason. </p>
                : expandedPatientInformation.entries.map(entry =>
                    <span key = {entry.id}>
                        <h4> {entry.date} </h4>
                        <EntryDetails entry = {entry} />
                        <p> {entry.description} </p>
                        { (entry.diagnosisCodes === undefined)
                            ? <br />
                            : entry.diagnosisCodes.map(diagnosisCode =>
                                <li key = {diagnosisCode}>
                                    {getDiagnosis(diagnosisCode)}
                                </li>
                            )
                        }
                    </span>
            )}
            <AddThingModal
                submitNewEntry = {submitNewEntry}
                onClose = {onCancel}
                modalOpen = {modal}
            />
            <button onClick = {() => toggleModal(true)}>
                Add a new entry
            </button>
        </div>
    )
}

export default IndividualPatient;
