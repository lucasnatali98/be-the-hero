const express = require('express');
const OngController = require('./controllers/OngController');

const connection = require('./database/connection');
const routes = express.Router(); // routes recebe um modulo de rotas


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

module.exports = routes;