const mongoose = require("mongoose")


const AttendanceSchema = new mongoose.Schema({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },
    date:{
        type:String
    },
    isPresent:{
        type:Boolean
    }
})


const Attendance = mongoose.model("Attendance",AttendanceSchema)

module.exports = Attendance