import {Patient, Gender} from "../types";
//import {parsePatientInput} from "../utils";

const patients: Patient[] = [
    {
        "id": "7a8f6fa7f6897a6faf567af56a7f57s657s",
        "name": "John McClane",
        "dateOfBirth": "1986-07-09",
        "ssn": "090786-122X",
        "gender": Gender.Male,
        "occupation": "New York City police officer",
        entries: [
            {
                id: "lfhuhfgakfghgfakgfyaskgfyafgk",
                date: "2015-01-02",
                type: "Hospital",
                specialist: "MD House",
                description: `
                    Healing time approximately two weeks.
                    The patient does not remember how they got the injury.
                `,
                diagnosisCodes: ["S62.5"],
                discharge: {
                    date: "2015-01-16",
                    criteria: "Thumb has healed."
                }
            }
        ]
    },
    {
        "id": "778564725786264727d67648524676",
        "name": "Martin Riggs",
        "dateOfBirth": "1979-01-30",
        "ssn": "300179-77A",
        "gender": Gender.Male,
        "occupation": "Police officer",
        entries: [
            {
                id: "20482032023820281039200020202020202020202",
                date: "2019-08-05",
                type: "OccupationalHealthcare",
                specialist: "MD House",
                description: `
                    Patient mistakenly found themself in a nuclear plant waste site,
                    without protection.
                    Very minor radiation poisoning.
                `,
                diagnosisCodes: [
                    "Z57.1",
                    "Z74.3",
                    "M51.2"
                ],
                employerName: "HyPD",
                sickLeave: {
                    startDate: "2019-08-05",
                    endDate: "2019-08-28"
                }
            }
        ]
    },
    {
        "id": "eaeae2947471747",
        "name": "Hans Gruber",
        "dateOfBirth": "1970-04-25",
        "ssn": "250470-555L",
        "gender": Gender.Male,
        "occupation": "Technician",
        entries: [

        ]
    },
    {
        "id": "05958305830a0s9384058",
        "name": "Dana Scully",
        "dateOfBirth": "1974-01-05",
        "ssn": "050174-432N",
        "gender": Gender.Female,
        "occupation": "Forensic Pathologist",
        entries: [
            {
                id: "72727s7627826s826s8276s827s826d8d76928d6",
                date: "2019-10-20",
                type: "HealthCheck",
                specialist: "MD House",
                description: "Yearly control visit. Cholesterol levels back to normal.",
                healthCheckRating: 0
            },
            {
                id: "kfhakd9474858djfha",
                date: "2019-09-10",
                type: "OccupationalHealthcare",
                specialist: "MD House",
                description: "Prescriptions renewed.",
                employerName: "FBI"
            },
            {
                id: "964847f9f957ikfkatufnahtiejahtye957",
                date: "2018-10-05",
                type: "HealthCheck",
                specialist: "MD House",
                description: `
                    Yearly control visit.
                    Due to high cholesterol levels,
                    recommended to eat more vegetables.
                `,
                healthCheckRating: 1
            }
        ]
    },
    {
        "id": "la1038493820485d9284",
        "name": "Vin Scully",
        "dateOfBirth": "1949-05-28",
        "ssn": "280549-300J",
        "gender": Gender.Other,
        "occupation": "Broadcaster",
        entries: [

        ]
    },
    {
        "id": "9584757495759349579485759497595847505837",
        "name": "Matti Luukkainen",
        "dateOfBirth": "1971-04-09",
        "ssn": "090471-8890",
        "gender": Gender.Male,
        "occupation": "Digital evangelist [sic]",
        entries: [
            {
                id: "068493djajtudj573627",
                date: "2019-05-01",
                type: "HealthCheck",
                specialist: "Dr Byte House",
                description: "Digital overdose. very bytestatic. Otherwise healthy",
                healthCheckRating: 0
            }
        ]
    }
]
/*
const listOfPatients: Patient[] = patients.map(patient => {
    const patientObject = parsePatientInput(patient) as Patient;
    patientObject.id = patient.id;
    return patientObject;
})

export default listOfPatients;
*/
export default patients;
