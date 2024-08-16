// Importando as tabelas do DB
const sala = require('../model/sala');

module.exports = {
    async sala(req, res){
        res.render('../views/cdSala');
    },
    async salaInsert(req, res){
        // Recebe as informações do front-end
        const dados = req.body;
        // Criando sala no banco de dados
        await sala.create({
            Nome: dados.Nome,
            Capacidade: dados.Capacidade
        });
        // Redirecionar para a página principal
        res.redirect('/');
    }
}