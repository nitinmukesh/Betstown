'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, type) => {
    const User = sequelize.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: type.STRING,
            allowNull: false,
            unique: true,
            isAlphanumeric: true,
            notEmpty: true,
            len: [4, 20]
        },
        email: {
            type: type.STRING,
            allowNull: false,
            unique: true,
            isEmail: true
        },
        password: {
            type: type.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        hookes: {
            beforeCreate: (user) => {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            }
        },
        instanceMethods: {
            validPassword: (password) => {
                return bcrypt.compareSync(password, this.password);
            }
        }
    });


    return User;
}