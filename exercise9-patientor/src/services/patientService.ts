import patients from "../data/patients";
import {SecurePatient} from "../types";

const getSecureEntries = (): SecurePatient[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }))
};

export default {
    getSecureEntries
};
