import patients from "../data/patients";
import {SecurePatient, Patient} from "../types";

const getSecureEntries = (): SecurePatient[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }))
};

const addPatient = (newPatient: Patient): Patient => {
    patients.push(newPatient);
    return newPatient;
}

export default {
    getSecureEntries,
    addPatient
};
