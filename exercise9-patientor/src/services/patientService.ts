import patients from "../data/patients";
import {SecurePatient, Patient, Entry} from "../types";

const getSecureEntries = (): SecurePatient[] => {
    const securePatients = patients.map(({
        id, name, dateOfBirth, gender, occupation
    }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }))
    return securePatients;
};

const addPatient = (newPatient: Patient): Patient => {
    patients.push(newPatient);
    return newPatient;
}

const getPatientInformation = (id: string): Patient => {
    let expandedPatient
    try {
        expandedPatient = patients.find(patient => patient.id === id)
    } catch (error) {
        throw new Error("No patients found with the given id");
    }
    if (expandedPatient) {
        return expandedPatient;
    } else {
        throw new Error("what are you doing here")
    }
}

const addEntry = (idOfPatient: string, newEntry: Entry): Entry => {
    const foundPatient = patients.find(patient => patient.id === idOfPatient)
    if (!foundPatient) {
        throw new Error("Could not find that patient for some reason.")
    }
    foundPatient.entries.push(newEntry);
    return newEntry;
}

export default {
    getSecureEntries,
    addPatient,
    getPatientInformation,
    addEntry
};
