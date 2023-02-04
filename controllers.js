import express from "express";
import Slaves from "./Model.js";
let app = express.Router();

app.post("/login", async (req, res) => {
    try {
        
        let slaveFound = await Slaves.findOne({username : req.body.username});
        if (!slaveFound) return res.status(404).json({error : "Username not found!"});        
        if (req.body.password != slaveFound.password) return res.status(401).json({error : "Invalid Credentials!"});

        if (slaveFound.disabled)
        {
            slaveFound.disabled = false;
            await slaveFound.save();

            return res.status(200).json({message : "Welcome Back after long time!"});
        }

        res.status(200).json({message : "Welcome Back!"});

    } catch (error) {
        res.status(500).json({error : "Internal Server Issue!"});
        console.log(error);
    }
});

app.post("/disable", async (req, res) => {
    try {
        
        let slaveFound = await Slaves.findOne({username : req.body.username});
        if (!slaveFound) return res.status(404).json({error : "Username not found!"});        
        if (req.body.password != slaveFound.password) return res.status(401).json({error : "Invalid Credentials!"});

        if (!slaveFound.disabled)
        {
            slaveFound.disabled = true;
            await slaveFound.save();
            res.status(200).json({message :  `${slaveFound.username} has been temporarily disabled`});
        }

        return res.status(400).json({error : "Account already disabled!"});

    } catch (error) {
        res.status(500).json({error : "Internal Server Issue!"});
        console.log(error);
    }
})

export default app;