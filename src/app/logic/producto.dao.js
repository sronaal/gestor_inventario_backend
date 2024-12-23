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

        return await Producto.findOne({where: {id_producto: id}})
    }

    async updateProduct(producto, id){

        return await Producto.update(producto, {where: {id_producto: id}})
    }

    async deleteProduct(id){
        
        return await Producto.destroy({where: {id_producto: id}})
    }

}


export default DaoProducto