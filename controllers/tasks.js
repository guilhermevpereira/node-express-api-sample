const { req, res } = require('express')
const { body, validationResult } = require('express-validator');

const taskModel = require('../models/task')

module.exports = app => {

    app.get("/tasks", (req, res) => {
        taskModel.listTasks(res)
    })

    app.post("/tasks",
        [
            // titulo não pode ser nulo
            body('title').not().isEmpty(),
            // titulo deve ter mais que 5 caracteres
            body('title').isLength({ min: 5 })
        ],
        (req, res) => {
            // Finds the validation errors in this request and wraps them in an object with handy functions
            const errors = validationResult(req);
            
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }

            const task = req.body

            taskModel.addTask(task, res)
        })

    app.get("/tasks/:id", (req, res) => {

        const id = parseInt(req.params.id)

        taskModel.getTaskById(id, res)
    })

    app.delete("/tasks/:id", (req, res) => {

        const id = parseInt(req.params.id)

        taskModel.deleteTask(id, res)
    })

    app.patch("/tasks/:id", (req, res) => {

        const id = parseInt(req.params.id)

        const values = req.body

        taskModel.updateTask(id, values, res)
    })
}