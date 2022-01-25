const express = require('express');
const app = new express();

//meu motor de html sera o EJS - definindo
app.set('view engine', 'ejs');
app.use(express.static('public')); // informando onde será meus arquivos static como css 

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

app.post('/salvarperguntar', (req, res) => {
    res.send("ola")
})

app.listen(8580, () => {
    console.log('app rodando')
})

