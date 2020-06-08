import express from "express";
const cors = require("cors");
import diaryRouter from "./routes/diaryRouter";
import diagnosisRouter from "./routes/diagnosisRouter";
import patientRouter from "./routes/patientRouter";
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get("/kling", (_request, response) => {
    console.log("Kling klong");
    response.send("klong");
});

app.get("/ping", (_request, response) => {
    response.send("viini");
});

app.get("/api/ping", (_request, response) => {
    response.send("klingel klangel");
});

app.use("/api/diaries", diaryRouter);

app.use("/api/diagnoses", diagnosisRouter);

app.use("/api/patients", patientRouter)

app.listen(PORT, () => {
    console.log(`Port ${PORT} has the server stuff`)
});
