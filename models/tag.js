import db from '../database.js';

import kategori from './kategori.js';
import lomba from './lomba.js';

// FK constraint
kategori.hasMany(tag, {
  foreignKey: 'kategori',
  onDelete: 'cascade',
  onUpdate: 'cascade',
});
lomba.hasMany(tag, {
  foreignKey: 'lomba',
  onDelete: 'cascade',
  onUpdate: 'cascade',
});

export default tag;
