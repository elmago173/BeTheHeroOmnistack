const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);


// Rota /Recurso


//Metodo Http:
// Get: listar/ Buscar uma informação no backend
// POST : Criar uma informação no backend
// PUT: Alterar uma informação no Backend
// DELETE: Deletar uma info
/*

Tipos de parâmetros:

Query Parans: parametros nomeados enviados na rota após o simbolo de ? e geralmente servem para
FilTROS PAGINACAO

Route Parans: Identificar recursos(users é recurso)
ex.:

Request Body Parans: corpo da requisicao utilizado para criar ou alterar

*/

    //const parans = request.query;// esse foi pra buscar query
//

/*
SQL: My SWL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSql: MongoDB, CouchDB, etc
*/

/**
 * Driver: SELECT = FROM useres
 * Query Builder: table("users").select('*').where()
 */


