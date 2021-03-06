'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')


//Creacion De Tokens
function createToken(user){
    
    const payload = {
        sub:user,
        iat: moment().unix(),
        exp: moment().add(1,'month').unix(),
    }

    return jwt.encode(payload,config.SECRET_TOKEN)
}


//Decodificacion De Token 
function decodeToken (token){
    const decode = new Promise((resolve,reject)=>{
        try {
            const payload = jwt.decode(token,config.SECRET_TOKEN)
            if(payload.exp <= moment().unix()){
                reject({
                    status: 401,
                    message: `El Token Ha Expirado`    
                })
            }

            resolve(payload.sub)
        } catch (err) {
            reject({
                status: 500,
                message: `Invalid Token`
            })            
        }
    })

    return decode
}

module.exports ={
    createToken,
    decodeToken
}