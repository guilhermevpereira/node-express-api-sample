const conexao = require('../database/conection')



class TaskDao {

    listTasks(callback) {

        const sql = 'SELECT * FROM todo_app.tasks'

        conexao.query(sql, callback)
    }

    getTaskById(id, callback) {

        const sql = 'SELECT * FROM todo_app.tasks WHERE id =?'

        conexao.query(sql, id, callback)
    }

    deleteTask(id, callback) {

        const sql = 'DELETE FROM todo_app.tasks where id =?'

        conexao.query(sql, id, callback)
    }

    updateTask(id, values, callback) {

        const sql = 'UPDATE tasks SET ? WHERE id = ?'

        conexao.query(sql, [values, id], callback)
    }

    addTask(task, callback) {

        const sql = "INSERT INTO tasks SET ?"

        conexao.query(sql, task, callback)
    }
}

module.exports = new TaskDao