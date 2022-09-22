const mongoose = require("mongoose");


const dbConnection = async() =>{
    try {
        await mongoose.connect(process.env.BD_CNN);
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar con la base de datos, por favor vuelva a intentar');
    }
}

module.exports = {
    dbConnection
}
