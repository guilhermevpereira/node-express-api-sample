const customExpress = require('../config/customExpress')
const conexao = require('../database/conection')

conexao.connect((erro) => {
    if (erro) {
        console.error(erro)
    } else {
        console.log('Conectao com Sucesso');
        
        const app = customExpress()

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

    }
})