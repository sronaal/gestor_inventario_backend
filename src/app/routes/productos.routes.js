import  { Router } from 'express'

import { obtenerProductos,obtenerProductoPorId ,obtenerProductosPorCategoria, obtenerProductoPorEstado} from '../controllers/producto.controller.js'

const routes = Router()

routes.get('/', obtenerProductos)
routes.get('/:id', obtenerProductoPorId)
routes.get('/categoria/:categoria', obtenerProductosPorCategoria)
routes.get('/estado/:estado', obtenerProductoPorEstado)

export default routes



