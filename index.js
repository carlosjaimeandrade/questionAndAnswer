const express = require('express');
const app = new express();

//meu motor de html sera o EJS - definindo
app.set('view engine', 'ejs');

app.get('/:nome/:linguagem', (req, res) => {
    //res.send("ola mundo")
    var exibir = true;
    res.render("index", {
        nome: req.params.nome,
        linguagem: req.params.linguagem,
        empresa: "B&R",
        exibir: exibir
    })
})

app.listen(8580, () => {
    console.log('app rodando')
})