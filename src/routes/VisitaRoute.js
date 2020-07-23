const express = require('express');
const router = express.Router();
const controller = require('../controllers/VisitaController')

router.get('/', controller.list);
router.get('/(:id)', controller.get_id);
router.post('/', controller.create);
router.put('/(:id)', controller.edit);
router.delete('/(:id)', controller.delete);

module.exports = router;