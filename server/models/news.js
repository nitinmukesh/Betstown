'use strict';

module.exports = (sequelize, type) => {
    const news = sequelize.define('news', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: type.STRING,
            allowNull: false,
            isAlphanumeric: true,
            notEmpty: true,
        },
        slug: {
            type: type.STRING,
            allowNull: false,
            unique: true,
            isAlphanumeric: true,
            notEmpty: true,
        }
    });

    return news;
}