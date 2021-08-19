const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
name:{
    type:String,
    required:[true,"Please add a Name"],
},
email:{
    type:String,
    required:[true,"Please add a email"],
    unique:true,
    match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "please add a valid email"],
},
class:{
    type:String,
    required:[true,"Please add your class"]
},
RollNO:{
    type:String,
    required:[true,"Add your ROll NO"]
},
createdAt:{
    type:Date,
    default:Date.now,
}
})

const Student = mongoose.model("Student",StudentSchema)

module.exports = Student
