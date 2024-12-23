import express from 'express'
import database from './app/models/database.js'
import { initModel } from './app/models/init.model.js'

import routesProductos from './app/routes/productos.routes.js'

const app = express()

app.use(express.json()) 


app.use('/api/productos',routesProductos )


const initDB = async () => {

    database.authenticate()
        .then(() => {
            console.log('Database connected')
            initModel()

            return database.sync({force: true}) 

        }).then(() => {})
        .catch((error) => {
            console.log('Error: ', error)
        })
}

initDB()



export default app
