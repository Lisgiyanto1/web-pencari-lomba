import { DataTypes } from 'sequelize';
import db from '../database.js';

// Model
const kategori = db.define('kategori',
    {
        kategori: {
            type: DataTypes.STRING(128),
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

export default kategori;