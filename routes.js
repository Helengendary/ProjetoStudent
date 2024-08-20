// Iniciando Route do Express
const express = require('express');
const route = express.Router();
// Importando os Controllers
const home = require('./src/controllers/home');
// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/index', home.pagInicialGet);

const cadastro = require('./src/controllers/cadastro');
route.post('/cdSala', cadastro.salaInsert);
route.post('/cdAlunos', cadastro.alunoInsert);

route.get('/cdSala', cadastro.sala);
route.get('/cdAlunos', cadastro.aluno);

route.post('/', home.pagInicialPost);
route.post('/index', home.pagInicialPost);

module.exports = route;