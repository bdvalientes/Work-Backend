'use strict' 

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db,(err,res)=>{
    if(err){
        return console.log(`Error: Conexion a la base de datos: ${err}`) 
    } 
    console.log('Conexion De BD establecida')

    app.listen(config.Puerto, () => {
        console.log(`API REST corriendo en http:localhost:${config.Puerto}`)
    })
})





