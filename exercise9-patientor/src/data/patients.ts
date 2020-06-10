import {Patient} from "../types";
import {parsePatientInput} from "../utils";

const patients = [
    {
        "id": "7a8f6fa7f6897a6faf567af56a7f57s657s",
        "name": "John McClane",
        "dateOfBirth": "1986-07-09",
        "ssn": "090786-122X",
        "gender": "male",
        "occupation": "New York City police officer"
    },
    {
        "id": "778564725786264727d67648524676",
        "name": "Martin Riggs",
        "dateOfBirth": "1979-01-30",
        "ssn": "300179-77A",
        "gender": "male",
        "occupation": "Police officer"
    },
    {
        "id": "eaeae2947471747",
        "name": "Hans Gruber",
        "dateOfBirth": "1970-04-25",
        "ssn": "250470-555L",
        "gender": "male",
        "occupation": "Technician"
    },
    {
        "id": "05958305830a0s9384058",
        "name": "Dana Scully",
        "dateOfBirth": "1974-01-05",
        "ssn": "050174-432N",
        "gender": "female",
        "occupation": "Forensic Pathologist"
    },
    {
        "id": "la1038493820485d9284",
        "name": "Vin Scully",
        "dateOfBirth": "1949-05-28",
        "ssn": "280549-300J",
        "gender": "other",
        "occupation": "Broadcaster"
    },
    {
        "id": "9584757495759349579485759497595847505837",
        "name": "Matti Luukkainen",
        "dateOfBirth": "1971-04-09",
        "ssn": "090471-8890",
        "gender": "male",
        "occupation": "Digital evangelist [sic]"
    }
]

const listOfPatients: Patient[] = patients.map(patient => {
    const patientObject = parsePatientInput(patient) as Patient;
    patientObject.id = patient.id;
    return patientObject;
})

export default listOfPatients;
