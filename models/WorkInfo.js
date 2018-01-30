'use strict'

const mongoose = require('mongoose')
const shema = mongoose.Schema

const WorkShema = new Schema({
    work: {
        them: {
            type: String,
            enum: [
                'Programacion',
                'Quimica',
                'Calculo',
                'Algebra',
                'Matematicas',
                'Español',
                'Macroeconomia'
            ]
        },
        description: String,
        dateOfDelivery: Date
    },
    student: {
        name: String,
        avatar: String,
        infoComunication: String,
        studentId: String
    }
})

module.exports = mongoose.model('WorkInfo',WorkShema)