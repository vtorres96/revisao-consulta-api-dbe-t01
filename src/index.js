const express = require('express');

const routes = require('./routes/index.js');

const app = express();

app.use(express.json());
app.use(routes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000')
});