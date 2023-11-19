import { DataTypes } from "sequelize";
import db from "../database.js";

// Model
const dosen = db.define("dosen",
    {
        nip: {
            type: DataTypes.STRING(18),
            primaryKey: true,
            allowNull: false
        },
        nama: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        kontak: {
            type: DataTypes.STRING(16),
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

export default dosen;