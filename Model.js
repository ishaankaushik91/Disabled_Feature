import mongoose from "mongoose";

let slaves = new mongoose.Schema({
    username : {
        type : String,
        maxLength : 20,
        minLength : 2,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minLength : 8,
        maxLength : 130
    },
    disabled : {
        type : Boolean,
        default : false
    }
});

export default mongoose.model("Slaves", slaves, "slaves");