import express from "express";
const app = express();
app.use(express.json());

const PORT = 3004;

app.get("/bling", (_request, response) => {
    console.log("bling blong");
    response.send("blong");
});

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
});
