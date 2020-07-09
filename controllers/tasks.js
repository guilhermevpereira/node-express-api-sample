const {req, res} = require('express')

module.exports = app => {
    app.get("/tasks", (req, res) => {
        res.send("GET Request /tasks")        
    })

    app.post("/tasks", (req, res) => {
        res.send("POST Request /tasks")        
    })
}