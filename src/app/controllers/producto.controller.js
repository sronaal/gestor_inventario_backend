import { request, response } from 'express'
import { DaoProducto } from '../logic/producto.dao.js'

let daoProducto = new DaoProducto()


export const obtenerProductos = async (req = request, res = response) => {

    try {

        let productos = await daoProducto.getProducts()

        if (productos.length < 0) res.status(404).json({ msg: 'No hay productos registrados' })

        res.status(200).json({ productos })

    }
    catch (error) {

        res.status(500).json({ msg: 'Error en el servidor', error: error })
    }
}

export const obtenerProductoPorId = async (req = request, res = response) => {

    try {

        let { id } = req.params
        let producto = await daoProducto.getProductById(id)

        if (!producto) res.status(404).json({ msg: 'No hay productos registrados' })

        res.status(200).json({
            producto
        })

    } catch (error) {


        res.status(500).json({
            msg: 'Error en el servidor',
            error: error
        })
    }
}