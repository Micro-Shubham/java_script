//import express
const express = require('express')
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.json());
//create an empty array that will store 
let tasks = [];

//get
app.get("/get", function (req, res) {
    //logic

    res.json(tasks);

});

//post 
app.post("/add", function (req, res) {

    const task = {
        title: req.body.title,
        des: req.body.des,
        id: Math.ceil(Math.random() * 10000),
    }
    tasks.push(task);
    res.json({
        msg: "task added successfully"
    })
});

//put
app.put("/put/:id", function (req, res) {
    const updated_id = req.params.id;
    
    for(let i=0;i<=tasks.length;i++) {
        
    }
    
});

//delete 
app.delete("/delete/:id", function (req, res) {
    const taskid = req.params.id;
    if (tasks[taskid]) {
        const deletetask = tasks.splice(taskid, 1)[0];
        res.json({
            mesg: "task deleted successfuly ", tasks: deletetask
        })
    }
    else {
        res.status(404).json({
            mesg: "task not found"
        })
    }
})

app.listen(3000, () => {
    console.log("server is listening on port  3000")
}

);