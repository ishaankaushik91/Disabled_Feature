import mongoose from "mongoose";

async function ConnectDB()
{
    try {
        
        await mongoose.connect(`DB URL`);
        console.log("DB Connected");

    } catch (error) {
        console.log(error);
    }
}

ConnectDB();