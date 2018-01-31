'use strict' 

const mongoose = require('mongoose')
const app = require('./app')

const port = process.env.PORT || 3001

mongoose.connect('mongodb://localhost:27017/workApp',(err,res)=>{
    if(err){
        return console.log(`Error: Conexion a la base de datos: ${err}`) 
    } 
    console.log('Conexion De BD establecida')

    app.listen(port, () => {
        console.log(`API REST corriendo en http:localhost:${port}`)
    })
})





