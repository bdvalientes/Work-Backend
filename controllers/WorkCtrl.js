'use strict'

const WorkInfo = require('../models/WorkInfo')

function getWorkInfo(res,req){
    let WorkId = req.params.WorkId
    WorkInfo.findById(WorkId,(err,workinfo)=>{
        if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if(!WorkId) return res.status(404).send({message : `El Work No Existe`})
        res.status(200).send({workinfo})
    })
}

function getWorksInfo(req,res){
    //revizar el message no existen work
    WorkInfo.find({},(err,workinfo)=>{
        if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if(!workinfo) return res.status(404).send({message: `No existen Work`})
        res.status(200).send({workinfo})
    })
}
function saveWorkInfo(req,res){
    console.log('POST /api/WorkInfo');
    console.log(req.body);
    let work = WorkInfo()
    work.work.them = req.body.them
    work.work.description = req.body.description
    work.work.dateOfDelivery = req.body.dateOfDelivery
    work.student.name = req.body.name
    work.student.infoComunication = req.body.infoComunication
    work.student.studentId = req.body.studentId
    work.save((err,workinfosave)=>{
        if(err) return res.status(500).send({message: `Error Al Guardar Work: ${err}`})
        res.status(200).send({work : workinfosave})
    })
}

function updateWorkInfo(req,res){
    let WorkId = req.params.WorkId
    let UpdateWork = req.body

    WorkInfo.findByIdAndUpdate(WorkId,UpdateWork,(err,updateWork)=>{
        if(err) res.status(500).send({message: `Error Al Actualizar Tarea: ${err}`})


        res.status(200).send({message: `Se Actualizo:` , updateWork })
        console.log(updateWork);
    })
}

function deleteWorkInfo(req,res){
    let WorkId = req.params.WorkId
    
    WorkInfo.findById(WorkId,(err,WorkDelete)=>{
        if(err) res.status(500).send({message: `Error: Borrar Tarea ${err}`})

        WorkDelete.remove(err => {
            if(err) res.status(500).send({message: `Error Remove: Al Borrar Tarea ${err}` })

            res.status(200).send({message: `La Tarea A Sido Borrada Ezitosamente`})
        })
    })
}

module.exports = {
    getWorkInfo,
    getWorksInfo,
    saveWorkInfo,
    updateWorkInfo,
    deleteWorkInfo
}