const express = require('express');

const app = express();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params: req.query
// Route Params:
// Body: 

app.get('/users', (request, response) => {
    return response.json({ message: "Hello Elisandro" });
});

app.listen(3333);