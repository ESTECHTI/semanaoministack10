const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

 mongoose.connect('mongodb+srv://Elisandro:elisandro@cluster0-hbfrl.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });

  app.use(express.json());
  app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recusro na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)


app.listen(3333);