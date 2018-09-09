const express = require('express');
const UsersRoutes = require('./users');
const NewsRouter = require('./news');

const APIRoutes = express.Router();

APIRoutes.use('/users', UsersRoutes);
APIRoutes.use('/news', NewsRouter);

module.exports = APIRoutes;