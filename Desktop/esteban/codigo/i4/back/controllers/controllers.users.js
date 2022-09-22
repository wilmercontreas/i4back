const { response } = require('express');
const axios = require('axios').default;
const { generateAudit } = require('../helpers/generateAudit');

// listar usuarios
const getUsers = async(req, res = response)=>{
    // hacer el llamado a la api y guardar la auditoria 
    const data = await requestHttp('https://jsonplaceholder.typicode.com/users?_limit=30');
    const auditGenerated = await generateAudit("GET", "api/accounts/users", data);
    // mensaje de respuesta 
    return res.status(200).json({
        ok: true,
        auditId: auditGenerated,
        data
    });
}

// listar publicaciones
const getPosts = async(req, res = response)=>{
    // hacer el llamado a la api y guardar la auditoria 
    const data = await requestHttp('https://jsonplaceholder.typicode.com/posts?_limit=30');
    const auditGenerated = await generateAudit("GET", "api/accounts/posts", data);
    // mensaje de respuesta 
    return res.status(200).json({
        ok: true,
        auditId: auditGenerated,
        data
    });
}

// listar fotos
const getPhotos = async(req, res = response)=>{
    // hacer el llamado a la api y guardar la auditoria 
    const data = await requestHttp('https://jsonplaceholder.typicode.com/photos?_limit=30');
    const auditGenerated = await generateAudit("GET", "api/accounts/photos", data);
    // mensaje de respuesta 
    return res.status(200).json({
        ok: true,
        auditId: auditGenerated,
        data
    });
}

// metodo de llamado a apis externas recibe la url de la api con los registros limitados a 30 para no sobrecargar la base de datos gratuita xD
const requestHttp = async(url) => {
    try {
        // guardar la respuesta de la api y retornarla
        const response = await axios.get(url);
        return response.data
    } catch (error) {
        return error
    }
}

module.exports = {
    getUsers,
    getPosts,
    getPhotos,
}
