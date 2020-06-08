"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
const PORT = 3004;
app.get("/bling", (_request, response) => {
    console.log("bling blong");
    response.send("blong");
});
app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});
