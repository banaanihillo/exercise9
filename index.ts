import express from "express";
const app = express();

app.get("/ping", (_request, response) => {
    response.send("pong");
});

app.get("/hello", (_request, response) => {
    response.send("Hello, Full Stack!");
})

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}.`);
})
