import db from '../database.js';

import dosen from './dosen.js';
import kategori from './kategori.js';

// Model
const kompetensi = db.define('kompetensi', {
  kompetensi: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
});

// FK constraint
dosen.hasMany(kompetensi, {
  foreignKey: 'dosen',
  onDelete: 'cascade',
  onUpdate: 'cascade',
});
kategori.hasMany(kompetensi, {
  foreignKey: 'kategori',
  onDelete: 'cascade',
  onUpdate: 'cascade',
});

export default kompetensi;
