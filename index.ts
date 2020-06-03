import express from "express";
import calculateBmi, {parseBMIArguments} from "./bmiCalculator"
const app = express();

app.get("/ping", (_request, response) => {
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

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}.`);
})
