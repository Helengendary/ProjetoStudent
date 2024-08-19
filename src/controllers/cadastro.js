// Importando as tabelas do DB
const sala = require('../model/sala');
const aluno = require('../model/aulo');


module.exports = {
    async sala(req, res){
        res.render('../views/cdSala');
    },
    async salaInsert(req, res){
        // Recebe as informações do front-end
        const dados = req.body;
        // Criando sala no banco de dados
        await sala.create({
            Nome: dados.nome,
            Capacidade: dados.capacidade
        });
        // Redirecionar para a página principal
        res.redirect('/');
    },

    async aluno(req, res) {
        // Encontrando todas as salas disponíveis no SQL
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDSala', 'Nome']
        });
        // Renderizando e passando o nome das salas para o front
        res.render('../views/cdAlunos', {salas});
    },
    async alunoInsert(req, res){
        const dados = req.body;

        let foto = "https://cdn-icons-png.flaticon.com/256/17/17004.png"

        await aluno.create({
            Nome: dados.nome,
            Idade: dados.idade,
            Sexo: dados.sexo,
            Foto: foto,
            IDSala: 1
        });

        res.redirect('/');
    },
    async pagInicialGet(req, res){
        const salas = await sala.findAll({
        raw: true,
        attributes: ['IDSala', 'Nome']
        });
        res.render('../views/index', {salas});
    }
}