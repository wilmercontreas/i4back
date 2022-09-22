const express = require('express');
const cors = require('cors');
const path = require('path');
const { dbConnection } = require('./db/db.config');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const openapiSpecification  = require('./docs/swagger');

// crear servidor/aplicacion express
const app = express();

// base de datos 
dbConnection();

// corse
app.use( cors() );

// lectura y parseo de body
app.use( express.json() );

// ruta de registro de peticiones
app.use( '/api/audits', require('./routes/routes.audit') );
// ruta de peticiones a jsonPlaceholder
app.use( '/api/accounts', require('./routes/routes.users') );

// directorio publico 
app.use(express.static('public'));

// swagger 
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

//demas rutas
app.get( '*', (req, resp) =>{
    resp.sendFile( path.resolve( __dirname, 'public/index.html' ) );
});

// asignar al puerto 4000
app.listen(process.env.PORT, () => {
    console.log(`la aplicacion esta corriendo en: http://localhost:${process.env.PORT}`);
});
