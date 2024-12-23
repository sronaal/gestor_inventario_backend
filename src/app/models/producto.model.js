import database  from './database.js'
import { DataTypes } from 'sequelize'
import { Stock } from './stock.model.js'
import { Categoria } from './categoria.model.js'

export const Producto = database.define('producto', {

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    id_producto:{
        type: DataTypes.STRING,
    },
    
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    id_categoria:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Categoria,
            key: 'id'
        }
    },

    id_stock:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Stock,
            key: 'id'
        }
    },

    precio_venta: {
        type: DataTypes.FLOAT,
    },
    precio_compra:{
        type: DataTypes.FLOAT,
    },

    descripcion:{
        type: DataTypes.STRING,
    },

    estado:{
        type: DataTypes.ENUM('Activo','Sin existencia','Inactivo'),
    }

    
})