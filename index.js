const express = require('express');
const app = new express();

//meu motor de html sera o EJS - definindo
app.set('view engine', 'ejs');

app.get('/:nome/:linguagem', (req, res) => {
    //res.send("ola mundo")
    var exibir = true;
    var produtos = [
        { nome: "Doritos", preco: 45.5 },
        { nome: "Doritos1", preco: 45.5 },
        { nome: "Doritos2", preco: 45.5 }
    ];
    res.render("index", {
        nome: req.params.nome,
        linguagem: req.params.linguagem,
        empresa: "B&R",
        exibir: exibir,
        produtos: produtos
    })
})

app.listen(8580, () => {
    console.log('app rodando')
})