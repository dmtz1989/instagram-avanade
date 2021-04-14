const express = require('express');
const router = express.Router();
const comentariosController =  require('../controllers/comentariosController');

router.get('/', comentariosController.index);
router.post('/', comentariosController.create);
router.put('/:id', comentariosController.update);
router.delete('/:id', comentariosController.delete);

module.exports = router;