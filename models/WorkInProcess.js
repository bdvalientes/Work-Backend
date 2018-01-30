'use strict'

const mongoose = require('mongoose')
const shema = mongoose.Schema

const WorkProcessShema = new Schema({
    work: {
        workId: {
            unique: true,
            type: String
        },
        them: String,
        description: String,
        dateOfDelivery: Date,
        workComplete: Boolean,
        user: {
            userId: Number,
            name: String
        },
        employee: {
            employeeId: String,
            name: String
        }
    }
})

module.exports = mongoose.model('WorkProcess',WorkProcessShema)