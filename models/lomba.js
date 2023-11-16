import { DataTypes } from "sequelize";
import db from "../database.js";

// Model
const lomba = db.define("lomba",
    {
        nama: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        deskripsi: {
            type: DataTypes.STRING(1024),
            allowNull: false
        },
        waktu: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM(["OPEN", "CLOSED", "FULL"]),
            allowNull: false
        },
        kuota_tim: {
            type: DataTypes.NUMBER,
            defaultValue: 0,
            allowNull: false
        },
        kuota_peserta: {
            type: DataTypes.NUMBER,
            defaultValue: 1,
            allowNull: false,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

export default lomba;