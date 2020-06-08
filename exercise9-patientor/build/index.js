"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
const PORT = 3005;
app.get("/kling", (_request, response) => {
    console.log("Kling klong");
    response.send("klong");
});
app.get("/ping", (_request, response) => {
    response.send("viini");
});
app.listen(PORT, () => {
    console.log(`Port ${PORT} has the server stuff`);
});
