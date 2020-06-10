import patients from "../data/patients";
import {SecurePatient, Patient} from "../types";

const getSecureEntries = (): SecurePatient[] => {
    const securePatients = patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
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

export default {
    getSecureEntries,
    addPatient
};
