const express = require('express');
const app = new express();

//meu motor de html sera o EJS - definindo
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //res.send("ola mundo")
    res.render("principal/perfil")
})

app.listen(8580, () => {
    console.log('app rodando')
})