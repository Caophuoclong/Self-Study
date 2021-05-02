const express = require('express');
const routes = express.Router();
const userController = require('../controllers/user.controller');

routes.get('/',userController.get);
routes.post('/', userController.post);

module.exports = routes;
