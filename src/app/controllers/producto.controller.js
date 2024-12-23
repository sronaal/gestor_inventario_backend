import {request, response} from 'express'
import  {DaoProducto}  from '../dao/dao-producto'

let daoProducto = new DaoProducto()


export const obtenerProductos = async (req = request, res = response) => {

    try {
        
        daoProducto.
        
    } catch (error) {
        
        
        res.status(500).json({
            msg: 'Error en el servidor',
            error: error
        })
    }
}