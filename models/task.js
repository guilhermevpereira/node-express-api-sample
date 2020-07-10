const moment = require('moment')

const conexao = require('../database/conection')

class Task {

    listTasks(res) {
        const sql = "SELECT * FROM todo_app.tasks";

        conexao.query(sql, (error, result) => {
            if (error) {
                res.json(error)
            } else {

                const newResult = result.map((itemTask) => {

                    const date = moment(itemTask.date).format('DD/MM/YYYY')

                    const created = moment(itemTask.created).format('DD/MM/YYYY')

                    itemTask = { ...itemTask, date, created }

                    return itemTask

                })
                res.json(newResult)
            }
        })
    }

    getTaskById(id, resp) {

        const sql = 'SELECT * FROM todo_app.tasks WHERE id =?'

        conexao.query(sql, id, (error, result) => {

            const date = moment(result[0].date).format('DD/MM/YYYY')

            const created = moment(result[0].created).format('DD/MM/YYYY')

            const taskResult = { ...result[0], date, created }

            if (error) {
                resp.json(error)
            } else {
                resp.json(taskResult)
            }
        })
    }

    addTask(task, res) {

        const sql = "INSERT INTO tasks SET ?"

        const created = moment().format('YYYY-MM-DD HH:MM:SS')

        const date = moment(task.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const newTask = { ...task, created, date }

        conexao.query(sql, newTask, (error, result) => {

            if (error) {
                res.json(error)
            } else {
                res.json(task)
            }
        })
    }

    deleteTask(id, resp) {

        const sql = 'DELETE FROM todo_app.tasks where id =?'

        conexao.query(sql, id, (error, result) => {
            if (error) {
                resp.json(error)
            } else {
                resp.json(result)
            }
        })
    }
}

module.exports = new Task