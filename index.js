const express = require('express');
const app = new express();
const bodyParser = require('body-parser')

//meu motor de html sera o EJS - definindo
app.set('view engine', 'ejs');
app.use(express.static('public')); // informando onde será meus arquivos static como css 

app.use(bodyParser.urlencoded({ extended: true })) //configurando o body parser para codificar os dados enviados
app.use(bodyParser.json()); //configurando para retorno em json trabalhar com epi

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

app.post('/salvarperguntar', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send(titulo)
})

app.listen(8580, () => {
    console.log('app rodando')
})

