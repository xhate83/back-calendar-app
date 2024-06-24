const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);
        throw new Error('Error conexión a base de datos');
    }
};

module.exports = {
    dbConnection
};