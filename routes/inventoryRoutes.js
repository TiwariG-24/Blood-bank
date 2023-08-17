const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { createInventoryController, getInventoryController,getDonarsController,getHospitalController,getOrgnaisationController,getOrgnaisationForHospitalController,getInventoryHospitalController } = require('../controllers/inventoryController');

const router = express.Router();
//routes
// add  inventory
router.post('/create-inventory', authMiddleware, createInventoryController);
//get all inventory records
router.get('/get-inventory',authMiddleware, getInventoryController)

router.get('/get-donars',authMiddleware, getDonarsController)
router.get('/get-hospitals',authMiddleware, getHospitalController)
router.get('/get-organisation',authMiddleware, getOrgnaisationController)
router.get('/get-orgnaisation-for-hospital',authMiddleware, getOrgnaisationForHospitalController)
router.post('/get-inventory-hospital',authMiddleware, getInventoryHospitalController)

module.exports = router;