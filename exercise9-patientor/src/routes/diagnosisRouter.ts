import express from "express";
import diagnosisService from "../services/diagnoseService";

const diagnosisRouter = express.Router();

diagnosisRouter.get("/", (_request, response) => {
    response.send(diagnosisService.getEntries())
});

export default diagnosisRouter;
