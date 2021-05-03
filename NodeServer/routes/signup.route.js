const express = require('express');
const routes = express.Router();
const signup = require('../controllers/signup.controller');

routes.get('/',signup.get);
routes.post('/', signup.post);

module.exports = routes;
