require("dotenv").config()
const express = require("express")
require("./db/mongoose")

//require models
const Student = require("./models/Student")
const Attendance = require("./models/Attendance")

const app = express()
const port = process.env.PORT;
app.use(express.json())


//Post attendance
app.post("/attendance",async (req,res) => {
    try{
const rollNo = req.body.rollNo

const student = await Student.findOne({RollNO:rollNo})

if(!student){
res.status(404).json({data:"student not found"})
}

const attendance = await Attendance.create({
    
    student:student._id,
    date:Date.now(),
    isPresent:true
})

console.log(attendance)

res.status(200).json({data:attendance,success:true})
    }catch(e){
res.status(400).send(e)
console.log(e)
    }
})

//get attendance 
app.get("/attendance", async (req,res) => {
    try{
const attendanceDate = req.query.date

attendanceDate.Is
const attendance = await Attendance.find({date:attendanceDate}).populate({path:"student",select:"name"})

res.status(200).json({data:attendance})

    }catch(e) {
console.log(e)
    }
})

app.listen(port , () => {
    console.log(`server is running on port ${port} `)
})