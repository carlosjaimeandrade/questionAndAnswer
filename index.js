const express = require('express');
const app = new express();
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')
const Resposta = require('./database/Resposta')


connection.authenticate()
    .then(() => {
        console.log('conexao feita com sucesso')
    }).catch(err => {
        console.log(err)
    })


//meu motor de html sera o EJS - definindo
app.set('view engine', 'ejs');
app.use(express.static('public')); // informando onde será meus arquivos static como css 

app.use(bodyParser.urlencoded({ extended: true })) //configurando o body parser para codificar os dados enviados
app.use(bodyParser.json()); //configurando para retorno em json trabalhar com epi

app.get('/', (req, res) => {
    Pergunta.findAll({ raw: true, order: [['id', 'DESC']] }).then(perguntas => {
        res.render('index', {
            perguntas: perguntas
        })
    })

})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

app.post('/salvarperguntar', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    })
})

app.get('/pergunta/:id', (req, res) => {
    const id = req.params.id;

    Pergunta.findOne({
        where: { id: id }
    }).then(pergunta => {
        if (pergunta != undefined) {
            Resposta.findAll({
                raw: true,
                where: {
                    perguntaId: id
                },
                order: [['id', 'DESC']]
            }).then(respostas => {
                res.render('pergunta', {
                    pergunta: pergunta,
                    respostas: respostas
                })
            })
        } else {
            res.redirect('/')
        }
    }) //retorna 1 unico registros

})

app.post('/pergunta/:id', (req, res) => {
    const id = req.params.id;
    const corpo = req.body.corpo
    Resposta.create({
        corpo: corpo,
        perguntaId: id
    }).then(() => {
        res.redirect('/pergunta/' + id)
    })

})

app.get('/delete/:id', (req, res)=>{
    const id = req.params.id

    Pergunta.destroy({
        where: {
            id: id
        }
    }).then(()=>{
        res.redirect('/')
    })
})

app.listen(8580, () => {
    console.log('app rodando')
})

