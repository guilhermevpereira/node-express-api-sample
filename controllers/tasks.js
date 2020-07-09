const {req, res} = require('express')

const taskModel = require('../models/task')

module.exports = app => {
    app.get("/tasks", (req, res) => {
        taskModel.listTasks(res)
    })

    app.post("/tasks", (req, res) => {
        res.send("POST Request /tasks")        
    })
}