import express from "express";
import diaryService from "../services/diaryService";
import toNewDiaryEntry from "../utils";

const router = express.Router();

router.get("/", (_request, response) => {
    response.send(diaryService.getNonSensitiveEntries());
});

router.post("/", (request, response) => {
    response.send("POSTing a new diary");
    try {
        const parsedDiary = toNewDiaryEntry(request.body);
        const newDiaryEntry = diaryService.addEntry(parsedDiary);
        response.json(newDiaryEntry);
    } catch (error) {
        response.status(400).send(error.message);
    }
});

router.get("/:id", (request, response) => {
    const diary = diaryService.findById(Number(request.params.id));

    if (diary) {
        response.send(diary);
    } else {
        response.status(404).end();
    }
})

export default router;
