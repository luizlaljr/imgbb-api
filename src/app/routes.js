const express = require('express');

const UploadController = require('./controllers/UploadController.js');

const routes = express.Router();

routes.get('/warm-up', UploadController.index);
routes.post('/upload', UploadController.store);

module.exports = routes;