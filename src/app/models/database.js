import { Sequelize } from 'sequelize'
import { config_app } from '../../config/config.app.js'


 const database = new Sequelize(config_app.database.database, config_app.database.user, config_app.database.password, {
    host: config_app.database.host,
    dialect: config_app.database.dialect,
})

export default database

