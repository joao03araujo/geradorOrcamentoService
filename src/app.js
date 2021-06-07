const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://<dbuser:<dbpassword>@ds133279.mlab.com:33279/crud-nodejs";

MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err)
    db = client.db('orcamento-bd') // coloque o nome do seu DB

    app.listen(3000, () => {
        console.log('Server running on port 3001')
    })
})

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/orcamento', (req, res) => {
    db.collection('data').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('show.ejs', { data: results })

    })
})

app.post('/orcamento', (req, res) => {
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('Salvo no Banco de Dados - Status code 200')
        res.redirect('/orcamento')
    })
})
