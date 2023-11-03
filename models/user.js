// Package
const Sequelize = require("sequelize");
const db = require("../database");

// Model
let user = db.define("user",
    {
        username: {
            type: Sequelize.STRING(32),
            primaryKey: true,
        },
        password: Sequelize.STRING(64),
        is_admin: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

user.removeAttribute("id");
module.exports = user;