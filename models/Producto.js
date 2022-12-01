import database from "../database/dataBase.js";
import { DataTypes } from "sequelize";
const Producto = database.define('producto', {
    nombre: {
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    }   
})

export {
    Producto
}