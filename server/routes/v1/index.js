const express = require('express');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const routes = express.Router();

fs.readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach(file => {
        routes.use(`/${file.replace('.js', '')}`, require(`./${file}`));
    });

module.exports = routes;