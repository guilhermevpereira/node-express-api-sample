const moment = require('moment')

const conexao = require('../database/conection')
const dao = require('../dao/taskDao')

class Task {

    listTasks(res) {

        dao.listTasks((error, result) => {

            if (!result.length) {
                return res.status(404).json({ errors: "Nenhum registro encontrado." });
            } else if (error) {
                res.status(400).json(error)
            }
            const formatedResult = result.map((itemTask) => {

                const date = moment(itemTask.date).format('DD/MM/YYYY')

                const created = moment(itemTask.created).format('DD/MM/YYYY')

                itemTask = { ...itemTask, date, created }

                return itemTask
            })
            res.status(200).json(formatedResult)
        })
    }

    getTaskById(id, res) {

        dao.getTaskById(id, (error, result) => {

            if (!result.length) {
                return res.status(404).json({ errors: "Nenhum registro encontrado." })
            }

            const date = moment(result[0].date).format('DD/MM/YYYY')

            const created = moment(result[0].created).format('DD/MM/YYYY')

            const taskResult = { ...result[0], date, created }

            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(taskResult)
            }
        })
    }

    addTask(task, res) {

        const created = moment().format('YYYY-MM-DD HH:MM:SS')

        const date = moment(task.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const newTask = { ...task, created, date }

        dao.addTask(newTask, (error, result) => {

            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(task)
            }
        })
    }

    deleteTask(id, res) {

        dao.deleteTask(id, (error, result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    }

    updateTask(id, values, res) {

        if (values.date) {
            values.date = moment(values.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        dao.updateTask(id, values, (error, result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    }
}

module.exports = new Task