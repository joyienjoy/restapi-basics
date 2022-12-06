const fs = require('fs').promises;
const express = require("express");
const cors = require("cors");
const _ = require("lodash");



const app = express();
app.use(express.json());

app.listen(3000, () => console.log("API Server is running at Port 3000.."));
const students = [
        {
                id:"1",
                name:"Joydeep",
                dept:"DevOps"
        }
]


app.get("/students", (req, res) => {
        res.send(students)
});

app.post("/add-student", (req,res) => {
        const student = req.body;

        if(!student){
                return res.sendStatus(400)
        }
        else {
                students.push(student);
                res.send("Data Received and Recorded for'${student.name}'");
        }
});

app.get("/students/:id", (req,res) => {
      const {id} = req.params;
      const gotStudent = students.find((student) => student.id == id);
      res.send(gotStudent);
});

app.delete("students:id", (req,res) => {
        const {id} = req.params.id;
        students = students.filter((student)=> student.id != id);
        res.send("Student Deleted")

});
