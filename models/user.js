// Package
import { DataTypes } from "sequelize";
import db from "../database.js";

// Model
const user = db.define("user",
    {
        username: {
            type: DataTypes.STRING(32),
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING(64)
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
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