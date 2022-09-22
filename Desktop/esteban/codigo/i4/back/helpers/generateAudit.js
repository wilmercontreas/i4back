const Audit = require('../models/Audit');

const generateAudit = async(method, url, response)=>{
    // obtener la fecha actual convertirla a string y armar el objeto para guardar el la bd
    const today = new Date();
    let date = today.toString();
    const body = {
        date,
        method,
        url,
        response
    }
    // crear el registro en la db y controlar posible error 
    try {
        const dbAudit = new Audit( body );
        await dbAudit.save();
        return dbAudit.id;
    } catch (error) {
        return false
    }
}

module.exports = {
    generateAudit
}
