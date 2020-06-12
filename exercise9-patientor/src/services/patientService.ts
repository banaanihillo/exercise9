import patients from "../data/patients";
import {SecurePatient, Patient} from "../types";

const getSecureEntries = (): SecurePatient[] => {
    const securePatients = patients.map(({
        id, name, dateOfBirth, gender, occupation, entries
    }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
    }))
    return securePatients;
};

const addPatient = (newPatient: Patient): Patient => {
    patients.push(newPatient);
    return newPatient;
}

const getSecurePatient = (id: string): SecurePatient => {
    let securePatient
    try {
        securePatient = getSecureEntries().find(patient => patient.id === id)
    } catch (error) {
        throw new Error("No patients found with the given id");
    }
    if (securePatient) {
        return securePatient;
    } else {
        throw new Error("what are you doing here")
    }
}

export default {
    getSecureEntries,
    addPatient,
    getSecurePatient
};
