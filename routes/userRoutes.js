const express = require('express');
var usuarioController = require('./../controller/userController');

var router = express.Router();

router.get('/usuario', usuarioController.index);
router.post('/usuario', usuarioController.guardar);
router.get('/usuario/:id', usuarioController.ver);
router.put('/usuario/:id', usuarioController.modificar);
router.delete('/usuario/:id', usuarioController.eliminar);





module.exports = router;