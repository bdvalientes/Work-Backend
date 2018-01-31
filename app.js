'use strict' 

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const UserCtrl = require('./controllers/UserCtrl')


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//Crear UserInfo
app.post('/api/UserInfo',UserCtrl.saveUserInfo)
// Mostrar Todos Los UserInfo 
app.get('/api/UserInfo',UserCtrl.getUsersInfo)
//Mostrar UserInfo Especifico
app.get('/api/UserInfo/:UserId',UserCtrl.getUserInfo)



//Crear WorkInfo
app.put('/api/WorkInfo',(res,req)=>{
    console.log('POST /api/WorkInfo')
    console.log(req.body);
    
    let workI = new WorkInfo()
    workI.work.them = req.body.them
    workI.work.description = req.body.description
    workI.work.dateOfDelivery = req.body.dateOfDelivery
    workI.student.name = req.body.name
    workI.student.infoComunication = req.body.infoComunication
    workI.student.studentId = req.body.studentId

    workI.save((err,workInfoSave)=>{
        if(err) res.status(500).send({message: `Error Al Guardar Tarea: ${err}`})

        res.status(200).send.send({workI : workInfoSave})
    })
})

app.put('/api/product/:productId',(req,res)=>{

})

app.delete('/api/product/:productId',(req,res)=>{

})


module.exports = app