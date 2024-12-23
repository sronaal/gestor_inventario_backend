import  { Router } from 'express'

import { obtenerProductos,obtenerProductoPorId } from '../controllers/producto.controller.js'

const routes = Router()

routes.get('/', obtenerProductos)
routes.get('/:id', obtenerProductoPorId)



export default routes



