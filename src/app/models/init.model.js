import {Categoria}  from "./categoria.model.js"
import { Producto } from "./producto.model.js"
import { Stock } from "./stock.model.js"


export const initModel = () => {

    // Relacion uno a muchos Producto - Categoria
    Producto.belongsTo(Categoria, {foreignKey: 'id_categoria'}),
    Categoria.hasOne(Producto, {foreignKey: 'id_categoria'})

    Producto.belongsTo(Stock, {foreignKey: 'id_stock'})
    Stock.hasOne(Producto, {foreignKey: 'id_stock'})

}