'use strict'

const express = require('express')
const UserCtrl = require('../controllers/UserCtrl')
const WorkCtrl = require('../controllers/WorkCtrl')
const api = express.Router()


//Crear UserInfo
api.post('/UserInfo',UserCtrl.saveUserInfo)
// Mostrar Todos Los UserInfo 
api.get('/UserInfo',UserCtrl.getUsersInfo)
//Mostrar UserInfo Especifico
api.get('/UserInfo/:UserId',UserCtrl.getUserInfo)
//Eliminar UserInfo 
api.delete('/UserInfo/:UserId',UserCtrl.deleteUserInfo)
//Actualizar UserInfo
api.put('/UserInfo/:UserId',UserCtrl.updateUserInfo)



//Crear WorkInfo
api.post('/WorkInfo',WorkCtrl.saveWorkInfo)
//Mostrar Todos Los WorkInfos
api.get('/WorkInfo',WorkCtrl.getWorksInfo)
//Mostrar WorkInfo Especifico
api.get('/WorkInfo/:WorkId',WorkCtrl.getWorkInfo)

module.exports = api