import express from "express";
import patientService from "../services/patientService";

const patientRouter = express.Router();

patientRouter.get("/", (_request, response) => {
    response.send(patientService.getSecureEntries())
});

patientRouter.post("/", (request, response) => {
    try {
        const patientInput = {
            id: (Math.floor(Math.random() * 1000000) + "bananas"),
            name: request.body.name,
            dateOfBirth: request.body.dateOfBirth,
            ssn: request.body.ssn,
            gender: request.body.gender,
            occupation: request.body.occupation
        }
        const newPatient = patientService.addPatient(patientInput);
        response.json(newPatient);
    } catch (error) {
        response.status(400).send(error.message);
    }
})

export default patientRouter;
