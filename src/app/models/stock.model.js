import database from "./database.js";
import { DataTypes } from "sequelize";

export const Stock = database.define('stock', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    cantidad_minina:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    unidad_medida:{
        type: DataTypes.STRING,
        allowNull: false
    },
})