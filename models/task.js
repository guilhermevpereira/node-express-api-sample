const moment = require('moment')

const conexao = require('../database/conection')

class Task {

    listTasks(res) {
        const sql = "SELECT * FROM todo_app.tasks";

        conexao.query(sql, (error, result) => {
            if (error) {
                res.json(error)
            } else {
                res.json(result)
            }
        })
    }

    addTask(task, res) {

        const sql = "INSERT INTO tasks SET ?"

        const created = moment().format('YYYY-MM-DD HH:MM:SS')

        const date = moment(task.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const newTask = {...task, created, date}
        
        conexao.query(sql, newTask, (error, result) => {

            if (error) {
                res.json(error)
            } else {
                res.json(task)
            }       
        })
    }
}

module.exports = new Task