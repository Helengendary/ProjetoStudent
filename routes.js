// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Iniciando Multer
const multer = require("multer");

const config = require('./src/config/multer');
const cadastro = require('./src/controllers/cadastro');
const home = require('./src/controllers/home');
const editar = require('./src/controllers/editar');

// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/index', home.pagInicialGet);

route.post('/', home.pagInicialPost);
route.post('/index', home.pagInicialPost);

route.get('/cdSala', cadastro.sala);
route.post('/cdSala', cadastro.salaInsert);

route.get('/cdAlunos', cadastro.aluno);
route.post('/cdAlunos', multer(config).single('foto'), cadastro.alunoInsert);

route.get('/editarAluno/:id', editar.alunos);
route.post('/editarAluno/:id', multer(config).single('foto'), editar.adicionar);

route.get('/editarSala/:id', editar.salas);
route.post('/editarSala/:id', editar.adicionarSala);

module.exports = route;