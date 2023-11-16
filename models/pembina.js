import db from "../database.js";

import lomba from "./lomba.js";
import dosen from "./dosen.js";

// Model
const pembina = db.define("pembina",
    {},
    {
        freezeTableName: true,
        timestamps: false
    }
);

// FK constraint
lomba.hasMany(pembina,
    {
        foreignKey: "lomba",
        onDelete: "cascade",
        onUpdate: "cascade"
    }
);
dosen.hasMany(pembina,
    {
        foreignKey: "dosen",
        onDelete: "cascade",
        onUpdate: "cascade"
    }
);

export default pembina;