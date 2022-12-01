import  express  from "express";
import { crearProducto } from "../controllers/productoscontrollers.js";
const productoRoute = express.Router()

productoRoute.post('/',crearProducto)

export{
    productoRoute
}