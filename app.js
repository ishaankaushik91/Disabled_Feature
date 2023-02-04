import express from "express";
import "./dbConnect.js";
import pp from "./controllers.js";
let app = express();

app.use(express.json());

app.use("/api", pp);

app.listen(3000, () => {
    console.log(`Server at 3000`);
});