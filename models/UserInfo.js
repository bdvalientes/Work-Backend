'use strict'

const mongoose = require('mongoose')
const Shema = mongoose.Schema

const UserShema = new Shema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    displayName: String,
    avatar:String,
    phone:String,
    puntuation: {
        type :Number,
        default : 0
    },
    password: {
        type: String,
        select: false
    },
    signupDate: {
        type: Date,
        default: Date.now()
    },
    lastLogin: Date,
    idsMyWorks: [],
    idsWorks: [],
    userRoll: {
        type: String,
        enum: ['Student', 'Employee','Student and Employee']
    }
})

UserShema.pre('save',(next)=>{
    let user = this
    if(!user.isModified('password')) return next()

    bcrypy.genSalt(10,(err,salt)=>{
        if(err) return next(err)

        bcrypy.hash(user.password,salt,null,(err,hash)=>{
            if(err) return next(err)

            user.password = hash
            next()
        })
    })
})

UserShema.methods.gravatar = function () {
    if (!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`
  
    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
  }



module.exports = mongoose.model('UserInfo', UserShema)
