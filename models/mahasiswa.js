import { DataTypes } from 'sequelize';
import db from '../database.js';

import user from './user.js';

// Model
const mahasiswa = db.define('mahasiswa',
    {
        nim: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        nama: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        prodi: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        jurusan: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        kontak: {
            type: DataTypes.STRING(),
            allowNull: false
        }
    }
);

// FK
user.hasOne(mahasiswa,
    {
        foreignKey: 'username',
        onDelete: 'cascade',
        onUpdate: 'cascade'
    }
);
export default mahasiswa;