const router = require('express').Router();
const ctrl = require('../controllers/barangCtrl');


router.post('/', ctrl.createBarang);
router.get('/', ctrl.getBarang);
router.get('/:id', ctrl.getBarangById);
router.put('/:id', ctrl.updateBarang);
router.delete('/:id', ctrl.deleteBarang);

module.exports = router;