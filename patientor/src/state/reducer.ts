import { State } from "./state";
import {Patient, Diagnosis} from "../types";

export type Action =
    | {
        type: "SET_PATIENT_LIST";
        payload: Patient[];
    }
    | {
        type: "ADD_PATIENT";
        payload: Patient;
    }
    | {
        type: "EXPAND_PATIENT";
        payload: Patient;
    }
    | {
        type: "GET_DIAGNOSES";
        payload: Diagnosis[];
    }
    | {
        type: "ADD_ENTRY";
        payload: Patient;
    }

export const setPatientList = (patientList: Patient[]): Action => {
    return {
        type: "SET_PATIENT_LIST",
        payload: patientList
    }
}

export const addPatient = (newPatient: Patient): Action => {
    return {
        type: "ADD_PATIENT",
        payload: newPatient
    }
}

export const expandPatient = (individualPatient: Patient): Action => {
    return {
        type: "EXPAND_PATIENT",
        payload: individualPatient
    }
}

export const getDiagnoses = (listOfDiagnoses: Diagnosis[]): Action => {
    return {
        type: "GET_DIAGNOSES",
        payload: listOfDiagnoses
    }
}

export const addEntry = (updatedPatient: Patient): Action => {
    return {
        type: "ADD_ENTRY",
        payload: updatedPatient
    }
}

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_PATIENT_LIST":
            return {
                ...state,
                patients: {
                    ...action.payload.reduce(
                        (memo, patient) => ({ ...memo, [patient.id]: patient }),
                        {}
                    ),
                    ...state.patients
                }
            };
        case "ADD_PATIENT":
            return {
                ...state,
                patients: {
                    ...state.patients,
                    [action.payload.id]: action.payload
                }
            };
        case "ADD_ENTRY":
            return {
                ...state,
                patients: {
                    ...state.patients,
                    [action.payload.id]: action.payload
                }
            };
        case "EXPAND_PATIENT":
            return {
                ...state,
                patients: {
                    ...state.patients,
                    [action.payload.id]: action.payload
                }
            }
        case "GET_DIAGNOSES":
            return {
                ...state,
                diagnoses: {
                    ...action.payload.reduce(
                        (memo, diagnosis) => ({...memo, [diagnosis.code]: diagnosis}),
                        {}
                    ),
                    ...state.diagnoses
                }
            }
        default:
            return state;
    }
};
