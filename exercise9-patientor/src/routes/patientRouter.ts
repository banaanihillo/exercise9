import express from "express";
import patientService from "../services/patientService";
import {parsePatientInput} from "../utils";

const patientRouter = express.Router();

patientRouter.get("/", (_request, response) => {
    response.send(patientService.getSecureEntries())
});

patientRouter.post("/", (request, response) => {
    try {
        const patientInput = {
            id: (Math.floor(Math.random() * 1000000) + "bananas"),
            ...request.body
        }
        const parsedPatientInput = parsePatientInput(patientInput);
        const newPatient = patientService.addPatient(parsedPatientInput);
        response.json(newPatient);
    } catch (error) {
        response.status(400).send(error.message);
    }
})

patientRouter.get("/:id", (request, response) => {
    response.send(patientService.getPatientInformation(request.params.id))
})

export default patientRouter;
