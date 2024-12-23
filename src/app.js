import express from 'express'
import database from './app/models/database.js'
import { initModel } from './app/models/init.model.js'


const app = express()


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

app.use(express.json()) 


export default app
