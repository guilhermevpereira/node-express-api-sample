const {req, res} = require('express')

module.exports = app => {
    app.get("/tasks", (req, res) => {
        res.send("GET Request /tasks")        
    })
}