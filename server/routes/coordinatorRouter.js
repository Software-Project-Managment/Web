const express = require('express')
const router = express.Router()
const coordinatorController = require('../controllers/coordinatorController')
const upload = require('../middleware/coordMulter')
const uploadSGK= require('../middleware/coordSGKMulter')



router.post('/',upload.single('file'),coordinatorController.addFile)
router.get('/',coordinatorController.getFile)
router.get('/download/:id',coordinatorController.downloadFile)

//SGK
router.post('/sgk',uploadSGK.single('file'),coordinatorController.addSGKFile)
router.get('/sgk',coordinatorController.getSGKFile)
router.get('/sgk/download/:id',coordinatorController.downloadSGKFile)


module.exports=router