const route = require('./source/routes/apiRouters');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
var cors = require('cors');
const app = express();
app.use(bodyParser.json()); // Para recepção o json do body
app.use(cors());

route(app, jwt);

// Subindo servidor
const server = http.createServer(app);
server.listen(3000);
console.log("Servidor rodando na porta 3000");