const mongoose = require('mongoose');
const URI = 'mongodb://localhost/proyectodb';
mongoose.connect(URI)// aqui se conectada a la base de atos y bueno manda mensaje dependiendo el resultado
.then(db=>console.log('Base de datos conectada'))
.catch(err=>console.error(err))
module.exports = mongoose;