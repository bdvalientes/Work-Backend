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

module.exports = mongoose.model('UserInfo', UserShema)
