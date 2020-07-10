const {req, res} = require('express')

const taskModel = require('../models/task')

module.exports = app => {
    app.get("/tasks", (req, res) => {
        taskModel.listTasks(res)
    })

    app.post("/tasks", (req, res) => {
        
        const task = req.body

        taskModel.addTask(task, res)   
    })

    app.get("/tasks/:id", (req, res) => {
        
        const id = req.params.id

        taskModel.getTaskById(id, res)
    })

    app.delete("/tasks/:id", (req, res) => {

        const id = req.params.id

        taskModel.deleteTask(id, res)

    })
}