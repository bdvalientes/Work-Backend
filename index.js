'use strict' 

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const UserInfo = require('./models/UserInfo')

const app = express()

const port = process.env.PORT || 3001
 
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/api/UserInfo', (req,res)=> {
    UserInfo.find({},(err,userinfo)=>{
        if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if(!userinfo) return res.status(404).send({message: `No Existe Usuarios`})

        res.status(200).send({userinfo})
    })
})

app.get('/api/UserInfo/:UserId', (req,res)=> {
    let UserId = req.params.UserId
    

    UserInfo.findById(UserId,(err,userInfo)=> {
        if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if(!UserId) return res.status(404).send({message : `El Usuario No Existe`})

        res.status(200).send({userInfo})
    })
})

app.post('/api/UserInfo',(req,res)=>{
    console.log('POST /api/UserInfo')
    console.log(req.body)

    let User = new UserInfo()
    User.email = req.body.email
    User.displayName = req.body.displayName
    User.phone = req.body.phone
    //User.puntuation = req.body.puntuation
    User.password = req.body.password
    User.lastLogin = req.body.lastLogin
    User.userRoll = req.body.userRoll

    User.save((err,UserInfoSave) => {
        if(err) res.status(500).send({message: `Error Al Guardar Usuario : ${err}`})

        res.status(200).send({User : UserInfoSave})
    })
})

app.put('/api/product/:productId',(req,res)=>{

})

app.delete('/api/product/:productId',(req,res)=>{

})

mongoose.connect('mongodb://localhost:27017/workApp',(err,res)=>{
    if(err){
        return console.log(`Error: Conexion a la base de datos: ${err}`) 
    } 
    console.log('Conexion De BD establecida')

    app.listen(port, () => {
        console.log(`API REST corriendo en http:localhost:${port}`)
    })
})





