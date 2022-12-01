import { Sequelize } from "sequelize";

 const database = new Sequelize('crudfullstack', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
export {
    database
}

