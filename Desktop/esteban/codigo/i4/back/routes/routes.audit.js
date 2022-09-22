const { Router } = require('express');
const { check } = require('express-validator');
const { getAudits, getAudit, addAudit, updateAudit, deleteAudit } = require('../controllers/controllers.audit');
const { validateBody } = require('../middlewares/validate-body');

const router = Router();

// listar peticiones
/**
* Post track
* @openapi
* /audits:
*    get:
*      tags:
*        - audits
*      summary: "Listar auditorias"
*      description: Este endpoint es para listar todas las auditorias
*      requestBody:
*          content:
*            application/json:
*              schema:
*                $ref: "#/components/schemas/user"
*/
router.get('/' ,getAudits);

// listar peticion
/**
* Post track
* @openapi
* /audits:
*    get:
*      tags:
*        - audits
*      summary: "Listar auditoria por id"
*      description: Este endpoint es para listar auditorias una auditoria por id
*      requestBody:
*          content:
*            application/json:
*              schema:
*                $ref: "#/models/Audit"
*/
router.get('/:id' ,getAudit);

// crear peticion
/**
* Post track
* @openapi
* /audits:
*    post:
*      tags:
*        - audits
*      summary: "crear auditoria"
*      description: Este endpoint es para crear auditorias
*      requestBody:
*          content:
*            application/json:
*              schema:
*                $ref: "#/models/Audit"
*/
router.post('/', [
    check('method', 'Method required').not().isEmpty(),
    check('url', 'Response required').not().isEmpty(),
    check('response', 'Response required').not().isEmpty(),
    validateBody
],addAudit);

// editar peticion
/**
* Post track
* @openapi
* /audits:
*    put:
*      tags:
*        - audits
*      summary: "editar auditoria"
*      description: Este endpoint es para editar una auditoria
*      requestBody:
*          content:
*            application/json:
*              schema:
*                $ref: "#/models/Audit"
*/
router.put('/:id', [
    check('method', 'Method required').not().isEmpty(),
    check('url', 'Response required').not().isEmpty(),
    check('response', 'Response required').not().isEmpty(),
    validateBody
],updateAudit);

// eliminar peticion
/**
* Post track
* @openapi
* /audits:
*    delete:
*      tags:
*        - audits
*      summary: "eliminar auditoria"
*      description: Este endpoint es para eliminar una auditoria
*      requestBody:
*          content:
*            application/json:
*              schema:
*                $ref: "#/models/Audit"
*/
router.delete('/:id', deleteAudit);


module.exports = router;
