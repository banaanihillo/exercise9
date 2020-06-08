import express from "express";
import diaryService from "../services/diaryService";

const router = express.Router();

router.get("/", (_request, response) => {
    response.send(diaryService.getNonSensitiveEntries());
});

router.post("/", (_request, response) => {
    response.send("POSTing a new diary");
});

export default router;
