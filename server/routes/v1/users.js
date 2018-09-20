const express = require('express');
const users = express.Router();

// Routes
users.get('/', (req, res) => {
    res.status(200).json({
        message: "users loaded"
    });
});

module.exports = users;