const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

//rutas
app.use('/api/pagos', require('./routes/pago.routes.js'));
app.use('/api/propietario', require('./routes/propietario.route.js'))

//setting
app.set('port', process.env.PORT || 3000);

//starting server
app.listen(app.get('port'), () =>{
    console.log('Server started on port', app.get('port'));
});