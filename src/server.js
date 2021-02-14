//Variáveis
const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages');

// Configurar Nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});


server
// Receber dados do req.body
.use(express.urlencoded({ extended: true }))

// Configurar arquivos estáticos (css, scripts, imagens, etc)
.use(express.static('public'))

// Rotas da Aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500);

