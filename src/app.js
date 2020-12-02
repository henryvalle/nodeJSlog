const express = require('express');
//const winston = require('winston');
const logger = require('./utils/logger');

const app = express();

app.route('/').get((req, res) => {
    logger.info('Usuario autenticado');
    res.send('Perfil de Usuario');
})

app.listen(3000, () => logger.info('Server is running'));