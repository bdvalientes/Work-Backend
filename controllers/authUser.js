'use strict'

const mongoose = require('mongoose')
const UserInfo = require('../models/UserInfo')
const service = require('../services')

//Crear Usuario con Token 
function signUp(req,res){
    const user = new UserInfo({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    })

    user.save((err)=> {
        if(err) res.status(500).send({message: `Error Al Crear Usuario ${err}`})

        return res.status(200).send({token: service.createToken(user)})
    })
}


//Ingreso De Login De Usuario con Token
function signIn(req,res){
    UserInfo.find({email:req.body.email},(err,user)=>{
        if(err) return res.status(500).send({message: err})
        if(!user) return res.status(404).send({message: `No Existe El Usuario`})

        req.user = user

        res.status(200).send({
            message: `Te Has Logueado Correctamente`,
            token: service.createToken(user)
        })

    })
}

module.exports = {
    signIn,
    signUp
}