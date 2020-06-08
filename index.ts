import express from "express";
import calculateBmi, {parseBMIArguments} from "./bmiCalculator";
import calculateExercises, {
    parseTargetHours,
    parseExerciseHours
} from "./exerciseCalculator";
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/ping", (_request, response) => {
    response.send("pong");
});

app.get("/hello", (_request, response) => {
    response.send("Hello, Full Stack!");
});

app.get("/bmi", (request, response) => {
    let inputForBMI = {
        height: Number(request.query.height),
        mass: Number(request.query.mass)
    }
    try {
        inputForBMI = parseBMIArguments(inputForBMI.height, inputForBMI.mass)
    } catch (error) {
        response.status(400).json({
            error: "Make sure you give two parameters, both of type number."
        })
    }
    response.json({
        height: inputForBMI.height,
        mass: inputForBMI.mass,
        bmi: calculateBmi(inputForBMI.height, inputForBMI.mass)
    })
});

app.post("/exercises", (request, response) => {
    let targetInput = request.body.target;
    let hourInput = request.body.daily_exercises;
    if (!targetInput || !hourInput) {
        return response.status(400).json({
            error: "Looks like some parameters are missing."
        })
    }
    try {
        targetInput = parseTargetHours(targetInput);
        hourInput = parseExerciseHours(hourInput);
    } catch (error) {
        return response.status(400).json({
            error: "Make sure the target is a number, and the hours an array of numbers."
        })
    }
    
    return response.json(calculateExercises(targetInput, hourInput));
})

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}.`);
})
