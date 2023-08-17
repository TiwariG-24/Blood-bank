const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { getDonarsListController, getHospitalListController, getOrgListController, deleteDonarData, deleteDonarController } = require('../controllers/adminController')
const adminMiddleware = require('../middlewares/adminMiddleware')
const router = express.Router()

router.get('/donar-list',authMiddleware,adminMiddleware,getDonarsListController)
router.get('/hospital-list',authMiddleware,adminMiddleware,getHospitalListController)
router.get('/Org-list',authMiddleware,adminMiddleware,getOrgListController)

router.delete('/delete-donar/:id',authMiddleware,adminMiddleware,deleteDonarController)
module.exports=router;