const express = require('express'); //importou o modulo express

const routes = require('./routes'); // arquivo e não pacote

const app = express(); 

app.use(express.json()); //Converte os json em objetos js 


app.use(routes);


/**
 * Métodos HTTP:
 * GET: Buscar/listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 * 
 * Recurso Insomnia: fazer visualização dos metodos diferentes do GET
 */

 /**
  * Tipos de parametros:
  * Query: Parametros nomeados enviados na rota após o simbolo '?' (Filtros, paginação)
  * Route Paramns : Parametros utilizados para identificar recursos "/:id"
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

 app.listen(3333); // endereço para acessar nossa página em questão