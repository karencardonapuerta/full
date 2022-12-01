import {Producto} from '../models/Producto.js'

const crearProducto = async (req,res) => {
    try{
    Producto.create(req.body)
    res.json({
        message: "usuario creado correctamente"
    })
    }catch(error){
        res.json({
            message: "no se pudo registar"+{error}
        })
    } 
}

const listarProductos = () => {

}

const listarProducto = () => {

}

const editarProductos = () =>{

}
const eliminarProducto = ()=> {

}

export {
    crearProducto,
    listarProducto,
    listarProductos,
    editarProductos,
    eliminarProducto
}