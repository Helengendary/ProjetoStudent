const sala = require('../model/sala');
const aluno = require('../model/aulo');

module.exports = {

    async alunos(req, res){
        // Recebendo o id da URL
        const parametro = req.params.id;
         const alunos = await aluno.findByPk(parametro, {
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Sexo', 'Foto', 'IDSala']
        });
        
        const salas = await sala.findAll({ raw: true, attributes: ['IDSala', 'Nome'] });
        res.render('../views/editarAluno', {salas, alunos});
    },

    async adicionar(req, res){
        const dados = req.body;
        const id = req.params.id;
        
        if (req.file) {
            // Recebendo a antiga foto do aluno
            const antigaFoto = await aluno.findAll({
                raw: true,
                attributes: ['Foto'],
                where: { IDAluno: id }
            });

            // Excluindo a foto da pasta
            if (antigaFoto[0].Foto != 'usuario.png') fs.unlink(`public/imagens/${antigaFoto[0].Foto}`, ( err => { if(err) console.log(err); } ));

            await aluno.update(
                {Foto: req.file.filename},
                {where: { IDAluno: id }}
            );
        }

        await aluno.update({
            Nome: dados.nome,
            Idade: dados.idade,
            Sexo: dados.sexo,
            IDSala: dados.SalaDeAula
        },
        {
            where: { IDAluno: id }
        });
        res.redirect('/');
    } 
}