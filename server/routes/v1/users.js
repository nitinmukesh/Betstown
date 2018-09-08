const express = require('express');
const UsersRoutes = express.Router();

// Routes
UsersRoutes.get('/', (req, res) => {
    res.status(200).json({
        message: "users loaded"
    });
});

module.exports = UsersRoutes;