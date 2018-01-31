'use strict'

const UserInfo = require('../models/UserInfo')

function getUserInfo(res,req){
    let UserId = req.params.UserId
    UserInfo.findById(UserId,(err,userInfo)=> {
        if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if(!UserId) return res.status(404).send({message : `El Usuario No Existe`})
        res.status(200).send({userInfo})
    })
}

function getUsersInfo(req,res){
    UserInfo.find({},(err,userinfo)=>{
        if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if(!userinfo) return res.status(404).send({message: `No Existe Usuarios`})
        res.status(200).send({userinfo})
    })
}
function saveUserInfo(req,res){
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
}
function updateUserInfo(req,res){

}

function deleteUserInfo(id){
    
}

module.exports = {
    getUserInfo,
    getUsersInfo,
    saveUserInfo,
    updateUserInfo,
    deleteUserInfo
}