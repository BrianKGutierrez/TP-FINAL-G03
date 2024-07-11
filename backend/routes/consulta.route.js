const consultaCtrl = require('../controllers/consulta.controller');
const express = require('express');
const router = express.Router();

router.get('/', consultaCtrl.getConsultas);
router.post('/', consultaCtrl.createConsulta);
router.put('/', consultaCtrl.editConsulta);

module.exports = router;