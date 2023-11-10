// Package
import Sequelize from "sequelize";
import db from "../database.js"

// Model
const user = db.define("user",
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
export default user;