const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Rota / Recursos
 */

/**
 * Métodos HTTP:
 * 
 * GET: Consulta / Busca de dados no Back-end
 * POST: Criar um informação no Back-end
 * PUT: Alterar um dado no Back-end
 * DELETE: Deletar um dado no Back-end
 */

/**
 * Tipos de parametros:
 * 
 * Query Param: Parâmetros nomeados enviados na rota após o "?" (Filtros, páginação)
 * Route Param: Parâmetros utilizados para identificados recursos (/1) declarado com /:id
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Banco de Dados
 * SQL: MySQL, SQLite, PostegreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc...
 */

/**
 * Drive de conexão com o banco de dados:
 * Drive: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 */



