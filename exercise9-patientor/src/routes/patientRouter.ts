import express from "express";
import patientService from "../services/patientService";

const patientRouter = express.Router();

patientRouter.get("/", (_request, response) => {
    response.send(patientService.getSecureEntries())
});

export default patientRouter;
