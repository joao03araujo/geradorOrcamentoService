const express = require('express');

const app = express();

const hostname = "localhost";

const port = 3000; 

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Seja bem vindo' });
});

const gerarOrcamento = require('./services/gerarOrcamento');
app.use('/services', gerarOrcamento);

app.listen(port, hostname, () => console.log('Express is running on http://localhost:3000'));
