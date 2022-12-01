import Express  from 'express'
import dataBase from './database/dataBase.js'
import { productoRoute } from './routes/productoroute.js'

const app = Express()

app.use('/producto',productoRoute)

try {
dataBase.authenticate()
console.log('coneccion exitosa')
} catch(error){
console.log(error)
}

app.listen(3100, ()=>{
console.log('Servidor corriendo en el puerto 3100')
console.log('http://localhost:3100')
})