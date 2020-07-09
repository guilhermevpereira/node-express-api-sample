const conexao = require('../database/conection')

class Task {

    listTasks(res) {
        const sql = "SELECT * FROM todo_app.tasks";

        conexao.query(sql, (error, result) => {
            if (error) {
                res.send(error)                
                console.log(error);
            } else {
                res.send(result)
                console.log(result);           
            }
        })
    }
}

module.exports = new Task