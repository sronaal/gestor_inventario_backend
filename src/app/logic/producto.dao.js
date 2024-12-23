import { Producto } from "../models/producto.model"

class DaoProducto {

    constructor (){}


    async createProduct(producto){

        return await Producto.create(producto)
    }

    async getProducts(){

        return await Producto.findAll()
    }

    async getProductById(id){

        return await Producto.findOne({where: {: id}})
    }

}


export default DaoProducto