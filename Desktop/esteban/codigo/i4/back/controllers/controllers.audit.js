const { response } = require('express');
const Audit = require('../models/Audit');
const { generateAudit } = require('../helpers/generateAudit');

// listar peticiones
const getAudits = async(req, res = response)=>{
    try {
        // buscar registros
        const data = await Audit.find();
        // respuesta correcta y retorno de los registros encontrado 
        return res.status(200).json({
            ok: true,
            data
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'get audits error',
        });
    }
}

// listar peticion
const getAudit = async(req, res = response)=>{
    // reaer el id de la peticion 
    const { id } = req.params;
    try {
        // buscar registro por id 
        const data = await Audit.findById(id);
        // respuesta correcta y retorno del registro encontrado 
        return res.status(200).json({
            ok: true,
            data
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'get audit error',
        });
    }
}

// cerar peticion
const addAudit = async(req, res = response)=>{
    // obtener datos del body, llamar a la funcion para generar la auditoria y pasarle los datos del body 
    const { method, url, response} = req.body;
    const auditGenerated = await generateAudit(method, url, response);
    // mensage de respuesta segun el retorno de la funcion generar auditoria 
    if (!auditGenerated){
        return res.status(500).json({
            ok: false,
            msg: 'create audit error',
        });
    }
    return res.status(201).json({
        ok: true,
        msg: 'Data saved',
        auditId: auditGenerated
    });
}


// editar audit
const updateAudit = async(req, res = response)=>{
    // treaer el id y body de la peticion inicializar la fecha actual
    const today = new Date();
    let date = today.toString();
    const { id } = req.params;
    const { method, url, response} = req.body;
    try { 
        // actualiza el registro
        const data = await Audit.updateOne({_id: id}, {$set: {method, url, response, date}});
        // respuesta correcta y retorno 
        return res.status(200).json({
            ok: true,
            data
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'update audit error',
        });
    }
}

// eliminar audit
const deleteAudit = async(req, res = response)=>{
    // treaer el id de la peticion 
    const { id } = req.params;
    try {
        // eliminar registro por id 
        const data = await Audit.deleteOne({_id: id});
        // respuesta correcta y retorno
        return res.status(200).json({
            ok: true,
            data
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'delete audit error',
        });
    }
}

module.exports = {
    getAudits,
    getAudit,
    addAudit,
    updateAudit,
    deleteAudit
}