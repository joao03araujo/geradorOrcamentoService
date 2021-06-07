const express = require('express');

const Router = express.Router();

Router.get('/', (req, res) => {
    let productList = [
        { name: "Feijão", price: 12.99 },
        { name: "teste", price: 12.99 },
        { name: "arroz", price: 12.99 },
    ];

    res.status(200).json(productList);
});

module.exports = Router;