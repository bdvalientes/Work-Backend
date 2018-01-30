'use strict'

const mongoose = require('mongoose')
const shema = mongoose.Schema

const WorkCompleShema = new Schema({
    work: {
        them: String,
        description: String,
        dateOfDelivery: Date,
        workUpdate: Boolean,
        workComplete: Boolean,
        user: {
            userId: Number,
            name: String
        },
        employee: {
            employeeId: Number,
            name: String
        }
    }
})

module.exports = mongoose.model('WorkCompleShema',WorkCompleShema)