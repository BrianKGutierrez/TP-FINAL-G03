const mongoose = require('mongoose');
//Conexion a base de datos Atlas
const URI = 'mongodb+srv://grupo03:ugJX3ZgQtrLpheXZ@akirashopping.h1ddstp.mongodb.net/';
mongoose.connect(URI)
.then(db=>console.log('DB is connected')) 
.catch(err=>console.error(err))

module.exports = mongoose;

