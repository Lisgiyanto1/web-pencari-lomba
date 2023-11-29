import { DataTypes } from 'sequelize';
import db from '../database.js';

// Model
const user = db.define('user', {
  username: {
    type: DataTypes.STRING(32),
    primaryKey: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  foto_profil: {
    type: DataTypes.STRING(512),
    allowNull: false,
  },
});

export default user;
