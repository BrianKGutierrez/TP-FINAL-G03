const novedadCtrl = require('../controllers/novedad.controller');
const express = require('express');
const router = express.Router();

router.get('/', novedadCtrl.getNovedades);
router.post('/', novedadCtrl.createNovedad);
router.put('/', novedadCtrl.editNovedad);

module.exports = router;