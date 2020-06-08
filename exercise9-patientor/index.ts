import express from "express";
const app = express();
app.use(express.json());

const PORT = 3005;

app.get("/kling", (_request, response) => {
    console.log("Kling klong");
    response.send("klong");
});

app.get("/ping", (_request, response) => {
    response.send("viini");
})

app.listen(PORT, () => {
    console.log(`Port ${PORT} has the server stuff`)
});
