const express = require('express');
const UsersRoutes = require('./users');

const APIRoutes = express.Router();

APIRoutes.use('/users', UsersRoutes);

module.exports = APIRoutes;