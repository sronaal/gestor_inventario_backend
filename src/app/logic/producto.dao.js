import { Categoria } from "../models/categoria.model.js"
import { Producto } from "../models/producto.model.js"
import { Stock } from "../models/stock.model.js"

export class DaoProducto {

    constructor (){}


    async createProduct(producto){

        return await Producto.create(producto)
    }

    async getProducts(){

        return await Producto.findAll(
            {
                include:[
                    {
                        model: Categoria,
                    },
                    {
                        model: Stock
                    }
                ]
            }
        )
    }

    async getProductById(id){

        return await Producto.findOne({where: {id_producto: id}})
    }

    async updateProduct(producto, id){

        return await Producto.update(producto, {where: {id_producto: id}})
    }

    async deleteProduct(id){
        
        return await Producto.destroy({where: {id_producto: id}})
    }

    async findProductByCategory(categoria){

        let productos = Producto.findAll(
            
            {
                include:[
                    {
                        model: Categoria,
                        as: 'categoria',
                        where: {nombre: categoria}
                    },
                ]
            }
        )

        return productos
    }

    async findProductByRangePrice(min, max){

        let productos = Producto.findAll(
            {
                where: {
                    precio: {
                        [Op.between]: [min, max]
                    }
                }
            }
        )

        return productos
    }

    async findProductoByEstado(estado){

        let productos = Producto.findAll(
            {
                include: [
                    {
                        model: Categoria
                    },
                    {
                        model: Stock
                    } 
                ],
                where: {estado: estado}
            }
        )

        return productos
    }
}

