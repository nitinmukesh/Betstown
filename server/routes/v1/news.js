const express = require('express');
const NewsRouter = express.Router();

// Routes
NewsRouter.route('/')
    .get((req, res) => {
        res.status(200).json([{
            title: "Some Random news"
        }]);
    })
    .post((req, res) => {
        res.status(200).json({
            message: "News added"
        });
    });

module.exports = NewsRouter;