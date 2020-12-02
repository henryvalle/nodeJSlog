const express = require('express');
//const winston = require('winston');
const logger = require('./utils/logger');

const app = express();

//app.route('/prueba').get((req, res) => {
//    logger.info('Usuario autenticado');
//    res.send('Perfil de Usuario');
//})

app.get('/prueba', function(req, res) {
 logger.info('Usuario autenticado');
    res.send('Perfil de Usuario');
 });


app.listen(8081, () => logger.info('Server is running'));
