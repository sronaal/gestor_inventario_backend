import database from './database.js'
import { DataTypes } from 'sequelize'


export const Categoria = database.define('categoria', {

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
})