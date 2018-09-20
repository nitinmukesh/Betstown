const express = require('express');
const news = express.Router();
const models = _require('/models');

// Routes
news.route('/')
    .get((req, res) => {

        models.news.findAll().then(news => {
            console.log(news);
        })

        res.status(200).json([{
            title: "Some Random news"
        }]);
    })
    .post((req, res) => {
        res.status(200).json({
            message: "News added"
        });
    });

news.route('/:slug')
    .get((req, res) => {
        res.status(200).json({
            title: "Some Random news"
        })
    });

module.exports = news;