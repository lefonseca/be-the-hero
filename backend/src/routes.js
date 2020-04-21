const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const TestController = require('./controllers/TestController');

const routes = express.Router(); 
/** Rotas de Testes Inicical */
routes.get('/users', TestController.index);
routes.get('/user/:id', TestController.indexDetail);
routes.post('/insertUser', TestController.create);

/** Rota de sessão */
routes.post('/sessions', SessionController.create);

/** Rotas da Ongs */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/** Rotas de Casos por Ongs */
routes.get('/profile', ProfileController.index);

/** Rotas de Casos */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;